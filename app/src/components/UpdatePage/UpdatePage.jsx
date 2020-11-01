import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography, Grid, Box, TextField, Button, ButtonGroup,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { updateInfo } from "../../redux/actions/studentAction";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10, 30, 10, 30),
    flexGrow: 1,
  },
  label: {
    backgroundColor: "#116466",
    padding: 10,
    marginBottom: 30,
    marginTop: 30,
  },
  labelText: {
    color: "white",
    textAlign: "center",
  },
  inputField: {
    width: "100%",
    paddingBottom: 10,
  },
}));

const UpdatePage = () => {
  const classes = useStyles();
  const [isUpdate, setIsUpdate] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (id === undefined) {
      setIsUpdate(false);
    } else {
      setIsUpdate(true);
    }
  }, [id]);

  const onSubmit = (data) => {
    dispatch(updateInfo(data));
  };

  return (
    <>
      <Box className={classes.root}>
        <Link to="/dashboard">
          <Typography>Back to Dashboard</Typography>
        </Link>
        <Grid classes={{ root: classes.label }}>
          <Typography className={classes.labelText}>Personal Information</Typography>
        </Grid>
        <Grid container justify="space-around">
          <TextField
            inputRef={register}
            name="firstName"
            label="First Name"
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            inputRef={register}
            name="middleName"
            label="Middle Name"
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            inputRef={register}
            name="lastName"
            label="Last Name"
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            inputRef={register}
            name="age"
            label="Age"
            type="Number"
            variant="outlined"
            className={classes.inputField}
          />
        </Grid>
        <Grid classes={{ root: classes.label }}>
          <Typography className={classes.labelText}>Address Information</Typography>
        </Grid>
        <Grid container spacing={3} direction="row" justify="space-evenly">
          <Grid item xs>
            <TextField
              inputRef={register}
              name="houseNumber"
              label="House Number"
              type="Number"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs>
            <TextField
              inputRef={register}
              name="streetName"
              label="Street Name"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs>
            <TextField
              inputRef={register}
              name="municipality"
              label="Municipality"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} direction="row" justify="space-around">
          <Grid item xs>
            <TextField
              inputRef={register}
              name="brgyNumber"
              label="Brgy. #"
              type="Number"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs>
            <TextField
              inputRef={register}
              name="zoneNumber"
              label="Zone #"
              type="Number"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs>
            <TextField
              inputRef={register}
              name="postalCode"
              label="Postal Code"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
        </Grid>
        <ButtonGroup disableElevation variant="contained" fullWidth size="large">
          <Button color="secondary">Clear fields</Button>
          <Button color="primary" onClick={handleSubmit(onSubmit)}>{isUpdate ? "Update Student" : "Add Student"}</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default UpdatePage;

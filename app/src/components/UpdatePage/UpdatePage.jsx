import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography, Grid, Box, TextField, Button, ButtonGroup,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { updateInfo, dispatchGetSingleStudent, clearStudentState } from "../../redux/actions/studentAction";
import {setModalType, toggleModal} from "../../redux/actions/modalAction";

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
  const student = useSelector(state => state.studentState.studentInfo)
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStudentState());
    if (id === undefined) {
      setIsUpdate(false);
    } else {
      dispatch(dispatchGetSingleStudent(id));
      setIsUpdate(true);
    }
  }, [id]);

  const handleOnSubmit = () => {
    dispatch(toggleModal(true));
    {isUpdate ? dispatch(setModalType('update')) : dispatch(setModalType('add')) }
  };

  const handleChange = (event, parent = undefined) => {
    dispatch(updateInfo(event.target.name, event.target.value, parent));
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
            onChange={(e) => {return handleChange(e, 'name');}}
            value={student.name.firstName}
            name="firstName"
            label="First Name"
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            onChange={(e) => {return handleChange(e, 'name');}}
            value={student.name.middleName}
            name="middleName"
            label="Middle Name"
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            onChange={(e) => {return handleChange(e, 'name');}}
            value={student.name.lastName}
            name="lastName"
            label="Last Name"
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            onChange={(e) => {return handleChange(e);}}
            value={student.age}
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
              onChange={(e) => {return handleChange(e, 'address');}}
              value={student.address.houseNumber}
              name="houseNumber"
              label="House Number"
              type="Number"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs>
            <TextField
              onChange={(e) => {return handleChange(e, 'address');}}
              value={student.address.streetName}
              name="streetName"
              label="Street Name"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs>
            <TextField
              onChange={(e) => {return handleChange(e, 'address');}}
              value={student.address.municipality}
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
              onChange={(e) => {return handleChange(e, 'brgy');}}
              value={student.address.brgy.brgyNumber}
              name="brgyNumber"
              label="Brgy. #"
              type="Number"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs>
            <TextField
              onChange={(e) => {return handleChange(e, 'brgy');}}
              value={student.address.brgy.zoneNumber}
              name="zoneNumber"
              label="Zone #"
              type="Number"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs>
            <TextField
              onChange={(e) => {return handleChange(e, 'address');}}
              value={student.address.postalCode}
              name="postalCode"
              label="Postal Code"
              variant="outlined"
              className={classes.inputField}
            />
          </Grid>
        </Grid>
        <ButtonGroup disableElevation variant="contained" fullWidth size="large">
          <Button color="secondary">Clear fields</Button>
          <Button color="primary" onClick={handleOnSubmit}>{isUpdate ? "Update Student" : "Add Student"}</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default UpdatePage;

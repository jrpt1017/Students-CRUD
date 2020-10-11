import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const callService = async () => {
  try {
    const data = await axios.get('http://localhost:3000/students');
    console.log(data);
  } catch (error) {
    console.log(error.message)
  }
};

const ButtonComp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={callService()}>Default</Button>
      <Button variant="contained" color="primary">
      Primary
      </Button>
      <Button variant="contained" color="secondary">
      Secondary
      </Button>
      <Button variant="contained" disabled>
      Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
      Link
      </Button>
    </div>
  );
}

export default ButtonComp;

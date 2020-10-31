import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const UpdatePage = () => {
  const classes = useStyles();

  return (
    <>
      <h1>helloohelloohelloohelloohelloohelloohelloohelloohelloohelloohelloo</h1>
    </>
  );
};

export default UpdatePage;

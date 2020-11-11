import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Fade, Backdrop, Modal as MuiModal, Typography, Button, Paper, Grid} from '@material-ui/core';
import { toggleModal } from '../../redux/actions/modalAction';
import { dispatchAddStudent, dispatchUpdateStudent } from '../../redux/actions/studentAction';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 50,
    paddingLeft: 50,
  },
}));

const Modal = () =>  {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modalState.isModalOpen);
  const modalType = useSelector(state => state.modalState.modalType);
  const student = useSelector(state => state.studentState.studentInfo)
  const id = student._id;

  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  const getModalTitle = () => {
    switch(modalType) {
      case 'add':
        return 'Add Student?';
      case 'update':
        return 'Update Student?';
      case 'delete':
        return 'Delete Student?';
    };
  };

  const handleDiscard = () => {
    dispatch(toggleModal(false));
  };

  const handleProceed = async () => {
    if(modalType === 'add'){
      dispatch(dispatchAddStudent(student))
    } else if(modalType === 'update') {
      dispatch(dispatchUpdateStudent(id, student));
    }
  };

  return (
    <div>
      <MuiModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Paper className={classes.paper}>
          <Typography>{getModalTitle()}</Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button color="secondary" variant="outlined" disableElevation size="large" onClick={handleDiscard}>Discard</Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained" disableElevation size="large" onClick={handleProceed}>Proceed</Button>
            </Grid>
          </Grid>
          </Paper>
        </Fade>
      </MuiModal>
    </div>
  );
}

export default Modal;

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {Fade, Backdrop, Modal as MuiModal} from '@material-ui/core';
import { toggleModal } from '../../redux/actions/modalAction';

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
    padding: theme.spacing(2, 4, 3),
  },
}));

const Modal = () =>  {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modalState.isModalOpen);
  const modalType = useSelector(state => state.modalState.modalType);

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
        return 'Delet Student?';
    };
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
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{getModalTitle()}</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </MuiModal>
    </div>
  );
}

export default Modal;

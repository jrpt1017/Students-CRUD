import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import { closeNotification } from "../../redux/actions/notificationAction";

const Notification = () => {
  const dispatch = useDispatch();
  const { isOpen, isSuccess, actionType } = useSelector(state => state.notificationState);

  const getAlertTitle = () => {
    switch (actionType) {
      case 'add':
        return 'Added Student Successfully!';
      case 'update':
        return 'Updated Student Successfully!';
      case 'delete':
        return 'Deleted Student Successfully';
      case 'deleteAll':
        return 'Deleted All Students SuccessFully';
      default: return '';
    }
  }

  const handleClose = () => {
    dispatch(closeNotification());
  };

  return (
    <>
      <Collapse in={isOpen}>
        <Alert severity={isSuccess ? "success" : "error"} onClose={handleClose}>
          <AlertTitle>{isSuccess ? getAlertTitle() : 'Operation Failure'}</AlertTitle>
        </Alert>
      </Collapse>
    </>
  );
};

export default Notification;

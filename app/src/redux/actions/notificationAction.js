export const setNotification = (isOpen, isSuccess, actionType) => {
  return {
    type: "SET_NOTIFICATION",
    isOpen,
    isSuccess,
    actionType,
  }
};

export const closeNotification = () => {
  return {
    type: "CLOSE_NOTIFICATION",
  }
};
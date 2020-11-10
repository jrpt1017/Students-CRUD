export const toggleModal = (value) => {
  return {
    type: 'TOGGLE_MODAL',
    payload: value,
  }
};

export const setModalType = (type) => {
  return {
    type: "SET_MODAL_TYPE",
    payload: type,
  }
};
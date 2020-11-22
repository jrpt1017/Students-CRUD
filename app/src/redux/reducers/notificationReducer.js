
const initState = {
  isOpen: false,
  isSuccess: false,
  actionType: ''
}

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      const { isOpen, isSuccess, actionType } = action;
      return {
        ...state,
        isOpen,
        isSuccess,
        actionType,
      }
    case "CLOSE_NOTIFICATION":
      return {
        ...state,
        isOpen: false,
      }
    default: return state;
  }
};

export default notificationReducer;
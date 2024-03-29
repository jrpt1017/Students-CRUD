
const initState = {
  isModalOpen: false,
  modalType: '',
  id: '',
}

const modalReducer = (state = initState, action) => {
  switch(action.type){
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: action.payload
      }
    case "SET_MODAL_TYPE":
      return {
        ...state,
        modalType: action.payload,
      }
    case "SET_MODAL_ID":
      return {
        ...state,
        id: action.payload,
      }
    default: return state;
  }
};

export default modalReducer;

const initState = {
  isModalOpen: false,
}

const modalReducer = (state = initState, action) => {
  switch(action.type){
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: action.payload
      }
    default: return state;
  }
};

export default modalReducer;
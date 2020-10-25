const initStore = {
  students: [],
};

export const studentsReducer = (state = initStore, action) => {
  switch(action.type) {
    case 'ADD_STUDENT': 
      return {
        ...state,
        students: action.payload,
      };
    case 'POPULATE_STATE':
      return{
        ...state,
        students: action.payload,
      };
    default: return state;
  };
};

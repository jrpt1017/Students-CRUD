const initStore = {
  students: [],
  studentInfo: {},
};

const studentsReducer = (state = initStore, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: action.payload,
      };
    case "POPULATE_STATE":
      return {
        ...state,
        students: action.payload,
      };
    case "UPDATE_INFO":
      return {
        ...state,
        studentInfo: action.payload,
      };
    default: return state;
  }
};

export default studentsReducer;

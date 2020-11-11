import {remove} from 'lodash';

const studentInfo = {
  id: '',
  name: {
    firstName: '',
    middleName: '',
    lastName: '',
  },
  age: '',
  address: {
    houseNumber: '',
    streetName: '',
    municipality: '',
    brgy: {
      brgyNumber: '',
      zoneNumber: ''
    },
    postalCode: '',
  }
};

const initStore = {
  students: [],
  studentInfo,
};

const studentsReducer = (state = initStore, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: action.payload,
      };
    case "RESET_STUDENT":
      return {
        ...state,
        studentInfo,
      }
    case "POPULATE_STATE":
      return {
        ...state,
        students: action.payload,
      };
    case "UPDATE_INFO":
      if (action.parent) {
        if(action.parent === 'brgy') {
          return {
            ...state,
            studentInfo: {
              ...state.studentInfo,
              address: {
                ...state.studentInfo.address,
                brgy: {
                  ...state.studentInfo.address.brgy,
                [action.payload.name]: action.payload.value,
                }
              }
            }
          }
        }
        return {
          ...state,
          studentInfo: {
            ...state.studentInfo,
            [action.parent]: {
              ...state.studentInfo.[action.parent],
              [action.payload.name]: action.payload.value,
            }
          }
        }
      }
      return {
        ...state,
        studentInfo: {
          ...state.studentInfo,
          [action.payload.name]: action.payload.value,
        }
      };
    case "GET_STUDENT":
      return {
        ...state,
        studentInfo: action.payload
      }
    default: return state;
  }
};

export default studentsReducer;

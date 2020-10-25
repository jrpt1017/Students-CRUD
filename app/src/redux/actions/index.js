import {getStudents} from '../../services/studentsService';


export const addStudent = () => {
  return {
    type: 'ADD_STUDENT',
    payload: [
      { name: 'jonnel', }
    ],
  }
};

const populateState = (students) => {
  return {
    type: 'POPULATE_STATE',
    payload: students,
  }
}

export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      const students = await getStudents();
      dispatch(populateState(students))
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
};
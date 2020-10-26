import {getStudents,deleteStudentByID} from '../../services/studentsService';


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

export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      await deleteStudentByID(id);
    } catch (error) {
      
    }
  };
};
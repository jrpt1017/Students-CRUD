import { getStudents, deleteStudentByID, getSingleStudent } from "../../services/studentsService";

const populateState = (students) => {
  return {
    type: "POPULATE_STATE",
    payload: students,
  };
};

export const updateInfo = (student) => {
  return {
    type: "UPDATE_INFO",
    payload: student,
  };
};

export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      const students = await getStudents();
      dispatch(populateState(students));
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
};

export const dispatchDeleteStudent = (id) => {
  return async (dispatch) => {
    try {
      await deleteStudentByID(id);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
};

export const dispatchGetSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      await getSingleStudent(id);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
};

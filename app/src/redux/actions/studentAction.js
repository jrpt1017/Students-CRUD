import { getStudents, deleteStudentByID, getSingleStudent, addStudent, updateStudentByID } from "../../services/studentsService";
import {history} from "../../index";

const populateState = (students) => {
  return {
    type: "POPULATE_STATE",
    payload: students,
  };
};

export const updateInfo = (name, value, parent) => {
  return {
    type: "UPDATE_INFO",
    payload: {name, value},
    parent,
  };
};

export const clearStudentState = () => {
  return {
    type: "RESET_STUDENT",
  }
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
      const data = await deleteStudentByID(id);
      console.log(data)
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
};

export const dispatchAddStudent = (student) => {
  return async (dispatch) => {
    try {
      const { status } = await addStudent(student);
      if (status === 201) {
        dispatch(updateInfo(student));
      }
      return (status === 201);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const dispatchUpdateStudent = (id, studentData) => {
  return async (dispatch) => {
    try {
      const { status } = await updateStudentByID(id, studentData);
      if (status === 201) {
        dispatch(updateInfo(studentData));
      }
      return (status === 201);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const dispatchGetSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const student = await getSingleStudent(id);
      console.log(student)
      const studentObject = {};
      studentObject.firstName = student.name.firstName;
      studentObject.middleName = student.name.middleName;
      studentObject.lastName = student.name.lastName;
      studentObject.age = student.age
      studentObject.houseNumber = student.address.houseNumber;
      studentObject.streetName = student.address.streetName;
      studentObject.municipality = student.address.municipality;
      studentObject.brgyNumber = student.address.brgy.brgyNumber;
      studentObject.zoneNumber = student.address.brgy.zoneNumber;
      studentObject.postalCode = student.address.postalCode;
      dispatch({
        type: "GET_STUDENT",
        payload: student,
      })
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
};

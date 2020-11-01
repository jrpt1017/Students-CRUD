import axios from 'axios';

// Get all students

const requestString = 'http://localhost:3000/students';

export const getStudents = async () => {
  try {
    const students = await axios.get(requestString);
    return students.data;
  } catch (error) {
    console.log(error.message)
  }
};

export const getSingleStudent = async (id) => {
  try {
    const student = await axios.get(`${requestString}/${id}`);
    return student.data;
  } catch (error) {
    console.log(error.message)
  }
};

export const deleteStudentByID = async (id) => {
  try {
    const student = await axios.delete(`${requestString}/${id}`);
    return student;
  } catch (error) {
    console.log(error.message);
  }
};
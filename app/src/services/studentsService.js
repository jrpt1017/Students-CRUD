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
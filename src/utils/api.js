import axios from 'axios';
// export const fbaseUrl = 'http://localhost:3000';
export const fbaseUrl = 'https://makecouple.netlify.app';
// export const baseUrl = 'http://localhost:5000';
export const baseUrl = 'https://datingapp.herokuapp.com';
export default axios.create({
  baseURL: `${baseUrl}/api`,
});

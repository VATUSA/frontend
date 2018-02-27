import axios from 'axios';

const sessionJwt = window.sessionStorage.getItem('token');

// Placeholder, add dev url
const getUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.vatusa.net/';
  }
  return 'https://api.dev.vatusa.net/';
};

export default axios.create({
  baseURL: getUrl(),
  withCredentials: true,
  headers: {
    Authorization: `bearer ${sessionJwt}`,
  },
});

import axios from 'axios';
import { API_URL } from 'config';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {
    // Authorization: `Bearer ${token}`, TODO: implement getToken func
    'Content-Type': 'application/json',
  },
});

export default instance;

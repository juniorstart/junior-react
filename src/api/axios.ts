import { getToken } from 'helpers/auth/session';
import axios from 'axios';
import { API_URL } from 'config';

const token = getToken();

const instance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default instance;

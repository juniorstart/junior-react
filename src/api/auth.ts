import { AxiosResponse } from 'axios';
import axios from './axios';
import apiRoutes from './routes';
import { Register, Login } from './interfaces';

export default {
  register(data: Register): Promise<AxiosResponse> {
    return axios.post(apiRoutes.register, { user: { ...data, id: 1 } });
  },
  login(data: Login): Promise<AxiosResponse> {
    return axios.post(apiRoutes.login, data);
  },
};

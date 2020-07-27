import { AxiosResponse } from 'axios';
import axios from './axios';
import apiRoutes from './routes';
import { User, Auth } from './interfaces';

export default {
  register(data: User): Promise<AxiosResponse> {
    return axios.post(apiRoutes.register, { user: { ...data, id: 1 } });
  },
  login(data: Auth): Promise<AxiosResponse> {
    return axios.post(apiRoutes.login, data);
  },
};

import { AxiosResponse } from 'axios';
import axios from './axios';
import apiRoutes from './routes';
import { CreateRecruitment, UpdateRecruitment } from './interfaces';

export default {
  getRecruitments(): Promise<AxiosResponse> {
    return axios.get(apiRoutes.recruitment);
  },
  createRecruitment(data: CreateRecruitment): Promise<AxiosResponse> {
    return axios.post(apiRoutes.recruitment, { ...data, id: 0, ownerId: 1 });
  },
  getRecruitment(id: number): Promise<AxiosResponse> {
    return axios.get(`${apiRoutes.recruitment}/${id}`);
  },
  deleteRecruitment(id: number): Promise<AxiosResponse> {
    return axios.delete(`${apiRoutes.recruitment}/${id}`);
  },
  updateRecruitment(id: number, data: UpdateRecruitment): Promise<AxiosResponse> {
    return axios.put(`${apiRoutes.recruitment}/${id}`, data);
  },
};

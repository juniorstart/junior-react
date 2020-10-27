import { AxiosResponse } from 'axios';
import axios from './axios';
import apiRoutes from './routes';
import { Recruitment, RecruitmentsResponse } from './interfaces';

export default {
  async getRecruitments(): Promise<RecruitmentsResponse[]> {
    const { data } = await axios.get(apiRoutes.recruitment);
    return data;
  },
  async createRecruitment(recruitment: Recruitment): Promise<AxiosResponse> {
    const { data } = await axios.post(apiRoutes.recruitment, { ...recruitment, id: 0, ownerId: 1 });
    return data;
  },
  getRecruitment(id: number): Promise<AxiosResponse> {
    return axios.get(`${apiRoutes.recruitment}/${id}`);
  },
  deleteRecruitment(id: number): Promise<AxiosResponse> {
    return axios.delete(`${apiRoutes.recruitment}/${id}`);
  },
  updateRecruitment(id: number, data: Recruitment): Promise<AxiosResponse> {
    return axios.put(`${apiRoutes.recruitment}/${id}`, data);
  },
};

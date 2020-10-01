import { AxiosResponse } from 'axios';
import axios from './axios';
import apiRoutes from './routes';
import { Recruitment } from './interfaces';

interface Recruitments {
  id: number;
  companyName: string;
  city: string;
  workPlace: string;
  dateOfCompanyReply: string;
  applicationDate: string;
  companyReply: boolean;
  notes: string;
  linkToApplication: string;
  ownerId: number;
}

export default {
  async getRecruitments(): Promise<Recruitments[]> {
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

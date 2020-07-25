import { AxiosResponse } from 'axios';
import axios from './axios';
import apiRoutes from './routes';
import { CreateTodoList, CreateAndUpdateTask } from './interfaces';

export default {
  getToDoLists(): Promise<AxiosResponse> {
    return axios.get(apiRoutes.todoLists);
  },
  createToDoList(data: CreateTodoList): Promise<AxiosResponse> {
    return axios.post(apiRoutes.todoListsTodoList, {
      ...data,
      id: 0,
      tasks: [],
      ownerId: 1,
      status: true,
    });
  },
  createTask(data: CreateAndUpdateTask, todolistId: string): Promise<AxiosResponse> {
    return axios.post(`${apiRoutes.todoListsTask}`, { ...data, todolistId, id: 0 });
  },
  updateTask(data: CreateAndUpdateTask): Promise<AxiosResponse> {
    return axios.put(`${apiRoutes.todoLists}/${data.id}`, data);
  },
  getTask(id: number): Promise<AxiosResponse> {
    return axios.get(`${apiRoutes.todoListsTask}/${id}`);
  },
  deleteTask(id: number): Promise<AxiosResponse> {
    return axios.delete(`${apiRoutes.todoListsTask}/${id}`);
  },
};

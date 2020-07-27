import { AxiosResponse } from 'axios';
import axios from './axios';
import apiRoutes from './routes';
import { TodoList, Task } from './interfaces';

export default {
  getToDoLists(): Promise<AxiosResponse> {
    return axios.get(apiRoutes.todoLists);
  },
  createToDoList(data: TodoList): Promise<AxiosResponse> {
    return axios.post(apiRoutes.todoList, {
      ...data,
      id: 0,
      tasks: [],
      ownerId: 1,
      status: true,
    });
  },
  createTask(data: Task, todolistId: string): Promise<AxiosResponse> {
    return axios.post(`${apiRoutes.todoListsTask}`, { ...data, todolistId, id: 0 });
  },
  updateTask(data: Task): Promise<AxiosResponse> {
    return axios.put(`${apiRoutes.todoLists}/${data.id}`, data);
  },
  getTask(id: number): Promise<AxiosResponse> {
    return axios.get(`${apiRoutes.todoListsTask}/${id}`);
  },
  deleteTask(id: number): Promise<AxiosResponse> {
    return axios.delete(`${apiRoutes.todoListsTask}/${id}`);
  },
};

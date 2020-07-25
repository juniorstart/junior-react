import { API_URL } from 'config';

const apiRoutes = {
  login: `${API_URL}/login`,
  users: `${API_URL}/register`,
  recruitment: `${API_URL}/api/recruitment`,
  todoLists: `${API_URL}/api/todolists/`,
  todoListsTask: `${API_URL}/api/todolists/task`,
  todoListsTodoList: `${API_URL}/api/todolists/task`,
};
export default apiRoutes;

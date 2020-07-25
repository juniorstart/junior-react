export interface Login {
  login: string;
  password: string;
}

export interface Register extends Login {
  firstName: string;
  lastName: string;
  email: string;
}

export interface CreateRecruitment {
  companyName: string;
  workPlace: string;
  notes: string;
  dateOfCompanyReply: string;
  linkToApplication: string;
}

export interface UpdateRecruitment extends CreateRecruitment {
  id: number;
  city: string;
  applicationDate: string;
  companyReply: boolean;
  ownerId: number;
}

export interface CreateTodoList {
  id?: number;
  name: string;
  tasks?: Task[];
  ownerId?: number;
  status?: boolean;
}

interface Task {
  id: number;
  description: string;
  status: boolean;
  todoListId: number;
}

export interface CreateAndUpdateTask {
  id: number;
  description: string;
  status: boolean;
  todoListId: number;
}

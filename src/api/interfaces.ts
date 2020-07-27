export interface Login {
  login: string;
  password: string;
}

export interface Register extends Login {
  firstName: string;
  lastName: string;
  email: string;
}

export interface Recruitment {
  id?: string;
  companyName: string;
  workPlace: string;
  notes: string;
  dateOfCompanyReply: string;
  linkToApplication: string;
  city: string;
  applicationDate: string;
  companyReply: boolean;
  ownerId?: string;
}

export interface TodoList {
  id?: number;
  name: string;
  tasks?: Task[];
  ownerId?: number;
  status?: boolean;
}

export interface Task {
  id: number;
  description: string;
  status: boolean;
  todoListId: number;
}

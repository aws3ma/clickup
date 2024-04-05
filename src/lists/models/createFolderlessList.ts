export interface CreateFolderlessListInput {
  name: string;
  content?: string | null;
  due_date?: number | null;
  due_date_time?: boolean | null;
  priority?: number | null;
  assignee?: number | null;
  status?: string | null;
}

export interface CreateFolderlessListResponse {
  id: string;
  name: string;
  orderindex: number;
  content: string;
  status: Status;
  priority: Priority;
  assignee: Assignee;
  task_count?: number | null;
  due_date: string;
  due_date_time: boolean;
  start_date?: string | null;
  start_date_time?: string | null;
  folder: Folder;
  space: Space;
  statuses?: (StatusesEntity)[] | null;
  inbound_address: string;
}
export interface Status {
  status: string;
  color: string;
  hide_label: boolean;
}
export interface Priority {
  priority: string;
  color: string;
}
export interface Assignee {
  id: number;
  color: string;
  username: string;
  initials: string;
  profilePicture: string;
}
export interface Folder {
  id: string;
  name: string;
  hidden: boolean;
  access: boolean;
}
export interface Space {
  id: string;
  name: string;
  access: boolean;
}
export interface StatusesEntity {
  status: string;
  orderindex: number;
  color: string;
  type: string;
}

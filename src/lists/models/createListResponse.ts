export interface CreateListResponse {
  id: string;
  name: string;
  orderindex: number;
  content: string;
  status: Status;
  priority: Priority;
  assignee: Assignee;
  due_date: string;
  due_date_time: boolean;
  folder: Folder;
  space: Space;
  statuses?: (StatusesEntity)[] | null;
  inbound_address: string;
  task_count?: number | null;
  start_date?: string | null;
  start_date_time?: string | null;
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

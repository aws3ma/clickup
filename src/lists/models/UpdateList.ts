export interface UpdateListInput {
  name: string;
  content: string;
  due_date: number;
  due_date_time: boolean;
  priority: number;
  assignee: string;
  status: string;
  unset_status: boolean;
}

export interface UpdateListResponse {
  id: string;
  name: string;
  orderindex: number;
  content: string;
  status: Status;
  priority: Priority;
  assignee?: null;
  task_count?: null;
  due_date: string;
  due_date_time: boolean;
  start_date?: null;
  start_date_time?: null;
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

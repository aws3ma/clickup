export interface GetFolderlessListsResponse {
  lists?: (ListsEntity)[] | null;
}
export interface ListsEntity {
  id: string;
  name: string;
  orderindex: number;
  content: string;
  status: Status;
  priority: Priority;
  assignee?: string | null;
  task_count?: string | null;
  due_date: string;
  start_date?: string | null;
  folder: Folder;
  space: Space;
  archived: boolean;
  override_statuses: boolean;
  permission_level: string;
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

export interface GetListResponse {
  id: string;
  name: string;
  deleted: boolean;
  orderindex: number;
  priority?: null;
  assignee?: null;
  due_date?: null;
  start_date?: null;
  folder: Folder;
  space: Space;
  inbound_address: string;
  archived: boolean;
  override_statuses: boolean;
  statuses?: (StatusesEntity)[] | null;
  permission_level: string;
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
  id: string;
  status: string;
  orderindex: number;
  color: string;
  type: string;
}

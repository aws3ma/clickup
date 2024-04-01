export interface UpdateFolderResponse {
  id: string;
  name: string;
  orderindex: number;
  override_statuses: boolean;
  hidden: boolean;
  space: Space;
  task_count: string;
}
export interface Space {
  id: string;
  name: string;
  access: boolean;
}

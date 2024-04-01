export interface GetFolderResponse {
  id: string;
  name: string;
  orderindex: number;
  override_statuses: boolean;
  hidden: boolean;
  space: Space;
  task_count: string;
  lists?: (null)[] | null;
}
export interface Space {
  id: string;
  name: string;
  access: boolean;
}

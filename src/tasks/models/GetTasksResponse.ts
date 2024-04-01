export interface GetTasksResponse {
  tasks?: (TasksEntity)[] | null;
  last_page: boolean;
}
export interface TasksEntity {
  id: string;
  custom_id?: null;
  custom_item_id: number;
  name: string;
  text_content: string;
  description: string;
  status: Status;
  orderindex: string;
  date_created: string;
  date_updated: string;
  date_closed?: null;
  date_done?: null;
  archived: boolean;
  creator: Creator;
  assignees?: (WatchersEntityOrAssigneesEntity | null)[] | null;
  group_assignees?: (null)[] | null;
  watchers?: (WatchersEntityOrAssigneesEntity1)[] | null;
  checklists?: (null)[] | null;
  tags?: (TagsEntity | null)[] | null;
  parent?: string | null;
  priority?: Priority | null;
  due_date?: string | null;
  start_date?: string | null;
  points?: null;
  time_estimate?: number | null;
  custom_fields?: (null)[] | null;
  dependencies?: (null)[] | null;
  linked_tasks?: (null)[] | null;
  locations?: (LocationsEntity | null)[] | null;
  team_id: string;
  url: string;
  sharing: Sharing;
  permission_level: string;
  list: List;
  project: ProjectOrFolder;
  folder: ProjectOrFolder;
  space: Space;
}
export interface Status {
  status: string;
  color: string;
  type: string;
  orderindex: number;
}
export interface Creator {
  id: number;
  username: string;
  color: string;
  email: string;
  profilePicture?: null;
}
export interface WatchersEntityOrAssigneesEntity {
  id: number;
  username: string;
  color: string;
  initials: string;
  email: string;
  profilePicture?: null;
}
export interface WatchersEntityOrAssigneesEntity1 {
  id: number;
  username: string;
  color: string;
  initials: string;
  email: string;
  profilePicture?: null;
}
export interface TagsEntity {
  name: string;
  tag_fg: string;
  tag_bg: string;
  creator?: null;
}
export interface Priority {
  color: string;
  id: string;
  orderindex: string;
  priority: string;
}
export interface LocationsEntity {
  id: string;
  name: string;
}
export interface Sharing {
  public: boolean;
  public_share_expires_on?: null;
  public_fields?: (string)[] | null;
  token?: null;
  seo_optimized: boolean;
}
export interface List {
  id: string;
  name: string;
  access: boolean;
}
export interface ProjectOrFolder {
  id: string;
  name: string;
  hidden: boolean;
  access: boolean;
}
export interface Space {
  id: string;
}

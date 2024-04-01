export interface UpdateTaskInput {
  name: string;
  description: string;
  status: string;
  priority: number;
  due_date: number;
  due_date_time: boolean;
  parent: string;
  time_estimate: number;
  start_date: number;
  start_date_time: boolean;
  assignees: Assignees;
  archived: boolean;
}
export interface Assignees {
  add?: (number)[] | null;
  rem?: (number)[] | null;
}

export interface UpdateTaskResponse {
  id: string;
  custom_id?: null;
  custom_item_id?: null;
  name: string;
  text_content: string;
  description: string;
  markdown_description: string;
  status: Status;
  archived: boolean;
  orderindex: string;
  date_created: string;
  date_updated: string;
  date_closed?: null;
  creator: Creator;
  assignees?: (null)[] | null;
  checklists?: (null)[] | null;
  tags?: (null)[] | null;
  parent: string;
  priority?: null;
  due_date?: null;
  start_date?: null;
  time_estimate?: null;
  time_spent?: null;
  custom_fields?: (CustomFieldsEntity)[] | null;
  list: ListOrFolderOrSpace;
  folder: ListOrFolderOrSpace;
  space: ListOrFolderOrSpace;
  url: string;
}
export interface Status {
  status: string;
  color: string;
  orderindex: number;
  type: string;
}
export interface Creator {
  id: number;
  username: string;
  color: string;
  profilePicture: string;
}
export interface CustomFieldsEntity {
  id: string;
  name: string;
  type: string;
  type_config: TypeConfig;
  date_created: string;
  hide_from_guests: boolean;
  value?: string | null;
  required: boolean;
}
export interface TypeConfig {
  single_user?: boolean | null;
  include_groups?: boolean | null;
  include_guests?: boolean | null;
  include_team_members?: boolean | null;
}
export interface ListOrFolderOrSpace {
  id: string;
}

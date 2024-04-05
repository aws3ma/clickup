export interface CreateTaskInput {
  name: string;
  description: string;
  markdown_description: string;
  assignees?: (number)[] | null;
  watchers?: (number)[] | null;
  tags?: (string)[] | null;
  status: string;
  priority: number;
  due_date: number;
  due_date_time: boolean;
  time_estimate: number;
  start_date: number;
  start_date_time: boolean;
  notify_all: boolean;
  parent?: null;
  links_to?: null;
  check_required_custom_fields: boolean;
  custom_fields?: (CustomFieldsEntity)[] | null;
}
export interface CustomFieldsEntity {
  id: string;
  value: string;
}

export interface CreateTaskResponse {
  id: string;
  custom_id?: null;
  custom_item_id?: null;
  name: string;
  text_content: string;
  description: string;
  markdown_description: string;
  status: Status;
  orderindex: string;
  date_created: string;
  date_updated: string;
  date_closed?: null;
  date_done?: null;
  creator: Creator;
  assignees?: (null)[] | null;
  watchers?: (null)[] | null;
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
  value: string;
  required: boolean;
}
export interface TypeConfig {
}

export interface ListOrFolderOrSpace {
  id: string;
}

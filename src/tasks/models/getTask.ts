export interface GetTaskResponse {
  id: string;
  custom_id: string;
  custom_item_id: number;
  name: string;
  text_content: string;
  description: string;
  status: Status;
  orderindex: string;
  date_created: string;
  date_updated: string;
  date_closed: string;
  creator: Creator;
  assignees?: (string)[] | null;
  watchers?: (string)[] | null;
  checklists?: (string)[] | null;
  tags?: (string)[] | null;
  parent: string;
  priority: string;
  due_date: string;
  start_date: string;
  time_estimate: string;
  time_spent: string;
  custom_fields?: (CustomFieldsEntity)[] | null;
  list: ListOrFolderOrSpace;
  folder: ListOrFolderOrSpace;
  space: ListOrFolderOrSpace;
  url: string;
  markdown_description: string;
  attachments?: (AttachmentsEntity)[] | null;
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
  value: Value;
  required: boolean;
}
export interface TypeConfig {
}
export interface Value {
  id: number;
  username: string;
  email: string;
  color: string;
  initials: string;
  profilePicture?: null;
}
export interface ListOrFolderOrSpace {
  id: string;
}
export interface AttachmentsEntity {
  id: string;
  date: number;
  title: string;
  type: number;
  source: number;
  version: number;
  extension: string;
  thumbnail_small?: null;
  thumbnail_medium?: null;
  thumbnail_large?: null;
  is_folder?: null;
  mimetype: string;
  hidden: boolean;
  parent_id: string;
  size: number;
  total_comments: number;
  resolved_comments: number;
  user?: (UserEntity)[] | null;
  deleted: boolean;
  orientation?: null;
  url: string;
  email_data?: null;
  url_w_query: string;
  url_w_host: string;
}
export interface UserEntity {
  id?: (IdEntity)[] | null;
  username: UsernameOrInitialsOrEmailOrColorOrProfilePicture;
  initials: UsernameOrInitialsOrEmailOrColorOrProfilePicture;
  email: UsernameOrInitialsOrEmailOrColorOrProfilePicture;
  color: UsernameOrInitialsOrEmailOrColorOrProfilePicture;
  profilePicture: UsernameOrInitialsOrEmailOrColorOrProfilePicture;
}
export interface IdEntity {
  type: string;
  contentEncoding: string;
}
export interface UsernameOrInitialsOrEmailOrColorOrProfilePicture {
  type: string;
}

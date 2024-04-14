export interface CreateFolderlessListInput {
  name: string;
  content?: string | null;
  due_date?: number | null;
  due_date_time?: boolean | null;
  priority?: number | null;
  assignee?: number | null;
  status?: string | null;
}

export interface CreateFolderlessListResponse {
  id: string
  name: string
  deleted: boolean
  orderindex: number
  content: string
  priority: Priority | null
  assignee: Assignee | null
  due_date: string | null
  start_date: string | null
  folder: Folder
  space: Space
  inbound_address: string
  archived: boolean
  override_statuses: boolean
  statuses: Status[]
  permission_level: string
}

export interface Priority {
  priority: string
  color: string
}

export interface Assignee {
  id: number
  color: string
  username: string
  initials: string
  profilePicture: string
}

export interface Folder {
  id: string
  name: string
  hidden: boolean
  access: boolean
}

export interface Space {
  id: string
  name: string
  access: boolean
}

export interface Status {
  id: string
  status: string
  orderindex: number
  color: string
  type: string
  status_group: string
}
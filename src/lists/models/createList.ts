export interface CreateListInput {
  name: string
  content?: string
  due_date?: number
  due_date_time?: boolean
  priority?: number
  assignee?: number
  status?: string
}

export interface CreateListResponse {
  id: string
  name: string
  deleted: boolean
  orderindex: number
  content: string
  priority: number | null
  assignee: number | null
  due_date: number | null
  start_date: number | null
  folder: Folder
  space: Space
  inbound_address: string
  archived: boolean
  override_statuses: boolean
  statuses: Status[]
  permission_level: string
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
export interface UpdateListInput {
  name?: string
  content?: string
  due_date?: number
  due_date_time?: boolean
  priority?: number
  assignee?: string
  status?: string
  unset_status?: boolean
}


export interface UpdateListResponse {
  id: string
  name: string
  deleted: boolean
  orderindex: number
  content: string
  priority: any
  assignee: any
  due_date: any
  start_date: any
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
}

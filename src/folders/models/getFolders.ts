export interface GetFoldersResponse {
  folders: Folder[]
}
export interface Folder {
  id: string
  name: string
  orderindex: number
  override_statuses: boolean
  hidden: boolean
  space: Space
  task_count: string
  archived: boolean
  statuses: any[]
  lists: List[]
  permission_level: string
}

export interface Space {
  id: string
  name: string
}

export interface List {
  id: string
  name: string
  orderindex: number
  content: string
  status: any
  priority: any
  assignee: any
  task_count: number
  due_date: any
  start_date: any
  space: SpaceInList
  archived: boolean
  override_statuses: boolean
  statuses: Status[]
  permission_level: string
}

export interface SpaceInList {
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

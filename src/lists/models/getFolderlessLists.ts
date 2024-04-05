export interface GetFolderlessListsResponse {
  lists: List[]
}

export interface List {
  id: string
  name: string
  orderindex: number
  content: string
  status: string
  priority: number
  assignee: number
  task_count: number
  due_date: number
  start_date: number
  folder: Folder
  space: Space
  archived: boolean
  override_statuses: boolean
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


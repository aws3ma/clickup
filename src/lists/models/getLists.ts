export interface GetListsResponse {
  lists: List[]
}

export interface List {
  id: string
  name: string
  orderindex: number
  content: string
  status: Status | null
  priority: Priority | null
  assignee: number | null
  task_count: number
  due_date: number | null
  start_date: number | null
  folder: Folder
  space: Space
  archived: boolean
  override_statuses: boolean
  permission_level: string
}

export interface Status {
  status: string
  color: string
  hide_label: boolean
}

export interface Priority {
  priority: string
  color: string
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

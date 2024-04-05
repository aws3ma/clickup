export interface GetFolderResponse {
  id: string
  name: string
  orderindex: number
  override_statuses: boolean
  hidden: boolean
  space: Space
  task_count: string
  archived: boolean
  statuses: Status[]
  lists: any[]
  permission_level: string
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
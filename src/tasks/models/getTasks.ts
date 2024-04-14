export interface GetTasksResponse {
  tasks: Task[]
  last_page: boolean
}

export interface Task {
  id: string
  custom_id: any
  custom_item_id: number
  name: string
  text_content: string
  description: string
  status: Status
  orderindex: string
  date_created: string
  date_updated: string
  date_closed: any
  date_done: any
  archived: boolean
  creator: Creator
  assignees: Assignee[]
  group_assignees: any[]
  watchers: Watcher[]
  checklists: any[]
  tags: Tag[]
  parent?: string
  priority?: Priority
  due_date?: string
  start_date?: string
  points: any
  time_estimate?: number
  custom_fields: any[]
  dependencies: any[]
  linked_tasks: any[]
  locations: Location[]
  team_id: string
  url: string
  sharing: Sharing
  permission_level: string
  list: List
  project: Project
  folder: Folder
  space: Space
}

export interface Status {
  status: string
  color: string
  type: string
  orderindex: number
}

export interface Creator {
  id: number
  username: string
  color: string
  email: string
  profilePicture: any
}

export interface Assignee {
  id: number
  username: string
  color: string
  initials: string
  email: string
  profilePicture: any
}

export interface Watcher {
  id: number
  username: string
  color: string
  initials: string
  email: string
  profilePicture: any
}

export interface Tag {
  name: string
  tag_fg: string
  tag_bg: string
  creator: any
}

export interface Priority {
  color: string
  id: string
  orderindex: string
  priority: string
}

export interface Location {
  id: string
  name: string
}

export interface Sharing {
  public: boolean
  public_share_expires_on: any
  public_fields: string[]
  token: any
  seo_optimized: boolean
}

export interface List {
  id: string
  name: string
  access: boolean
}

export interface Project {
  id: string
  name: string
  hidden: boolean
  access: boolean
}

export interface Folder {
  id: string
  name: string
  hidden: boolean
  access: boolean
}

export interface Space {
  id: string
}

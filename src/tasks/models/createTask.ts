export interface CreateTaskInput {
  name: string
  description?: string
  markdown_description?: string
  assignees?: number[]
  tags?: string[]
  status?: string
  priority?: number
  due_date?: number
  due_date_time?: boolean
  time_estimate?: number
  start_date?: number
  start_date_time?: boolean
  notify_all?: boolean
  parent?: any
  links_to?: any
  check_required_custom_fields?: boolean
  custom_fields?: CustomField[]
}

export interface CustomField {
  id: string
  value: string
}

export interface CreateTaskResponse {
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
  assignees: any[]
  group_assignees: any[]
  watchers: Watcher[]
  checklists: any[]
  tags: any[]
  parent: any
  priority: any
  due_date: any
  start_date: any
  points: any
  time_estimate: any
  time_spent: number
  custom_fields: any[]
  dependencies: any[]
  linked_tasks: any[]
  locations: any[]
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
  id: string
  status: string
  color: string
  orderindex: number
  type: string
}

export interface Creator {
  id: number
  username: string
  color: string
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

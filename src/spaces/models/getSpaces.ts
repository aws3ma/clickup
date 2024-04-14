export interface GetSpacesResponse {
  spaces: Space[]
}

export interface Space {
  id: string
  name: string
  color?: string
  private: boolean
  avatar?: string
  admin_can_manage: boolean
  statuses: Status[]
  multiple_assignees: boolean
  features: Features
  archived: boolean
}

export interface Status {
  id: string
  status: string
  type: string
  orderindex: number
  color: string
}

export interface Features {
  due_dates: DueDates
  sprints: Sprints
  time_tracking: TimeTracking
  points: Points
  custom_items: CustomItems
  priorities: Priorities
  tags: Tags
  check_unresolved: CheckUnresolved
  zoom: Zoom
  milestones: Milestones
  custom_fields: CustomFields
  dependency_warning: DependencyWarning
  status_pies: StatusPies
  multiple_assignees: MultipleAssignees
}

export interface DueDates {
  enabled: boolean
  start_date: boolean
  remap_due_dates: boolean
  remap_closed_due_date: boolean
}

export interface Sprints {
  enabled: boolean
}

export interface TimeTracking {
  enabled: boolean
  harvest: boolean
  rollup: boolean
  default_to_billable: number
}

export interface Points {
  enabled: boolean
}

export interface CustomItems {
  enabled: boolean
}

export interface Priorities {
  enabled: boolean
  priorities: Priority[]
}

export interface Priority {
  color: string
  id: string
  orderindex: string
  priority: string
}

export interface Tags {
  enabled: boolean
}

export interface CheckUnresolved {
  enabled: boolean
  subtasks: any
  checklists: any
  comments: any
}

export interface Zoom {
  enabled: boolean
}

export interface Milestones {
  enabled: boolean
}

export interface CustomFields {
  enabled: boolean
}

export interface DependencyWarning {
  enabled: boolean
}

export interface StatusPies {
  enabled: boolean
}

export interface MultipleAssignees {
  enabled: boolean
}
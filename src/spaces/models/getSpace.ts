export interface GetSpaceResponse {
  id: string
  name: string
  color: string | null
  private: boolean
  avatar: string | null
  admin_can_manage: any
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
  points: Points
  custom_items: CustomItems
  priorities: Priorities
  time_estimates: TimeEstimates
  checklists: Checklists
  zoom: Zoom
  milestones: Milestones
  remap_dependencies: RemapDependencies
  dependency_warning: DependencyWarning
  status_pies: StatusPies
  multiple_assignees: MultipleAssignees
  emails: Emails
  time_tracking: TimeTracking
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

export interface TimeEstimates {
  enabled: boolean
  rollup: boolean
  per_assignee: boolean
}

export interface Checklists {
  enabled: boolean
}

export interface Zoom {
  enabled: boolean
}

export interface Milestones {
  enabled: boolean
}

export interface RemapDependencies {
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

export interface Emails {
  enabled: boolean
}

export interface TimeTracking {
  default_to_billable: number
}

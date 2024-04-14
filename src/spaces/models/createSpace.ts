export interface CreateSpaceInput {
  name: string
  multiple_assignees?: boolean
  features?: Features
}

export interface Features {
  due_dates: DueDates
  time_tracking: TimeTracking
  tags: Tags
  time_estimates: TimeEstimates
  checklists: Checklists
  custom_fields: CustomFields
  remap_dependencies: RemapDependencies
  dependency_warning: DependencyWarning
  portfolios: Portfolios
}

export interface DueDates {
  enabled: boolean
  start_date: boolean
  remap_due_dates: boolean
  remap_closed_due_date: boolean
}

export interface TimeTracking {
  enabled: boolean
}

export interface Tags {
  enabled: boolean
}

export interface TimeEstimates {
  enabled: boolean
}

export interface Checklists {
  enabled: boolean
}

export interface CustomFields {
  enabled: boolean
}

export interface RemapDependencies {
  enabled: boolean
}

export interface DependencyWarning {
  enabled: boolean
}

export interface Portfolios {
  enabled: boolean
}



export interface CreateSpaceResponse {
  id: string
  name: string
  color: string
  private: boolean
  avatar: string
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
  checklists: Checklists
  zoom: Zoom
  milestones: Milestones
  remap_dependencies: RemapDependencies
  dependency_warning: DependencyWarning
  status_pies: StatusPies
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

export interface Emails {
  enabled: boolean
}

export interface TimeTracking {
  default_to_billable: number
}

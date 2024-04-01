export interface GetSpacesResponse {
  spaces?: (SpacesEntity)[] | null;
}
export interface SpacesEntity {
  id: string;
  name: string;
  color?: string | null;
  private: boolean;
  avatar?: null;
  admin_can_manage: boolean;
  statuses?: (StatusesEntity)[] | null;
  multiple_assignees: boolean;
  features: Features;
  archived: boolean;
}
export interface StatusesEntity {
  id: string;
  status: string;
  type: string;
  orderindex: number;
  color: string;
}
export interface Features {
  due_dates: DueDates;
  sprints: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
  time_tracking: TimeTracking;
  points: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
  custom_items: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
  priorities: Priorities;
  tags: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
  check_unresolved: CheckUnresolved;
  zoom: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
  milestones: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
  custom_fields: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
  dependency_warning: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
  status_pies: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
  multiple_assignees: SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees;
}
export interface DueDates {
  enabled: boolean;
  start_date: boolean;
  remap_due_dates: boolean;
  remap_closed_due_date: boolean;
}
export interface SprintsOrPointsOrCustomItemsOrTagsOrZoomOrMilestonesOrCustomFieldsOrDependencyWarningOrStatusPiesOrMultipleAssignees {
  enabled: boolean;
}
export interface TimeTracking {
  enabled: boolean;
  harvest: boolean;
  rollup: boolean;
  default_to_billable: number;
}
export interface Priorities {
  enabled: boolean;
  priorities?: (PrioritiesEntity)[] | null;
}
export interface PrioritiesEntity {
  color: string;
  id: string;
  orderindex: string;
  priority: string;
}
export interface CheckUnresolved {
  enabled: boolean;
  subtasks?: null;
  checklists?: null;
  comments?: null;
}

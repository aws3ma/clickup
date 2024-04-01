export interface UpdateSpaceInput {
  name: string;
  color: string;
  private: boolean;
  admin_can_manage: boolean;
  multiple_assignees: boolean;
  features: Features;
}
export interface Features {
  due_dates: DueDates;
  time_tracking: TimeTrackingOrTagsOrTimeEstimatesOrChecklistsOrCustomFieldsOrRemapDependenciesOrDependencyWarningOrPortfolios;
  tags: TimeTrackingOrTagsOrTimeEstimatesOrChecklistsOrCustomFieldsOrRemapDependenciesOrDependencyWarningOrPortfolios;
  time_estimates: TimeTrackingOrTagsOrTimeEstimatesOrChecklistsOrCustomFieldsOrRemapDependenciesOrDependencyWarningOrPortfolios;
  checklists: TimeTrackingOrTagsOrTimeEstimatesOrChecklistsOrCustomFieldsOrRemapDependenciesOrDependencyWarningOrPortfolios;
  custom_fields: TimeTrackingOrTagsOrTimeEstimatesOrChecklistsOrCustomFieldsOrRemapDependenciesOrDependencyWarningOrPortfolios;
  remap_dependencies: TimeTrackingOrTagsOrTimeEstimatesOrChecklistsOrCustomFieldsOrRemapDependenciesOrDependencyWarningOrPortfolios;
  dependency_warning: TimeTrackingOrTagsOrTimeEstimatesOrChecklistsOrCustomFieldsOrRemapDependenciesOrDependencyWarningOrPortfolios;
  portfolios: TimeTrackingOrTagsOrTimeEstimatesOrChecklistsOrCustomFieldsOrRemapDependenciesOrDependencyWarningOrPortfolios;
}
export interface DueDates {
  enabled: boolean;
  start_date: boolean;
  remap_due_dates: boolean;
  remap_closed_due_date: boolean;
}
export interface TimeTrackingOrTagsOrTimeEstimatesOrChecklistsOrCustomFieldsOrRemapDependenciesOrDependencyWarningOrPortfolios {
  enabled: boolean;
}

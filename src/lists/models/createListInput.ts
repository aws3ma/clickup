export interface CreateListInput {
  name: string;
  content?: string | null;
  due_date?: number | null;
  due_date_time?: boolean | null;
  priority?: number | null;
  assignee?: number | null;
  status?: string | null;
}

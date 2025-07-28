import type { TaskStatus } from "../../enums/task.status.enum";

export interface TaskFilterInterface {
  search: string;
  status: TaskStatus | string;
}
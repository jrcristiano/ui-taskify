export const TaskStatus = {
  ALL: 0,
  PENDING: 1,
  DONE: 2,
} as const;

export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];
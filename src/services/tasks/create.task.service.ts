import api from "../../boot/api";
import type { FormTaskInterface } from "../../common/interfaces/tasks/form.task.interface";

export function createTask(task: FormTaskInterface) {
  return api.post('/tasks', task);
}

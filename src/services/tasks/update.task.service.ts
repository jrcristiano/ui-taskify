import api from "../../boot/api";
import type { FormTaskInterface } from "../../common/interfaces/tasks/form.task.interface";

export function updateTask(id: number, data: FormTaskInterface) {
  data.statusId = +data.statusId;
  return api.put(`/tasks/${id}`, data);
}

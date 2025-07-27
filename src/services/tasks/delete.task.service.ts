import type { Id } from "react-toastify";
import api from "../../boot/api";

export function deleteTask(id: Id) {
  return api.delete(`/tasks/${id}`);
}

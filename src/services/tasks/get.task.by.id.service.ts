import api from "../../boot/api";
import type { Id } from "../../common/types/Id";

export function getTaskById(id: Id) {
  return api.get(`/tasks/${id}`);
}
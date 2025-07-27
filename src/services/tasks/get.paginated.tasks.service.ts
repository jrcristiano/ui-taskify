import api from "../../boot/api";

export function getPaginatedTasks() {
  return api.post('/tasks');
}

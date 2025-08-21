import api from "../../boot/api";
import { TaskStatus } from "../../common/enums/task.status.enum";
import type { OrderDirection } from "../../common/types/OrderDirection";

interface PaginatedTasksParams {
  page?: number;
  perPage?: number;
  order?: OrderDirection;
  sort?: string;
  search?: string;
  status?: TaskStatus;
}

export function getPaginatedTasks(params: PaginatedTasksParams = {}) {
  const defaultParams: PaginatedTasksParams = {
    page: params.page || 1,
    perPage: params.perPage || 9,
    order: params.order || 'desc',
    sort: params.sort || 'id',
    search: params.search || '',
    status: params.status || TaskStatus.ALL,
  };

  const { page, perPage, order, sort, status, search } = defaultParams;

  const queryParams: Record<string, unknown> = {
    page,
    perPage,
    order,
    sort,
    status
  };

  if (status !== TaskStatus.ALL) {
    queryParams.status = status;
  }

  if (search?.trim()) {
    queryParams.search = search.trim();
  }

  return api.get('/tasks', {
    params: queryParams
  });
}
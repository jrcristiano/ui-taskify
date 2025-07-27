import api from "../../boot/api";

interface PaginatedTasksParams {
  page?: number;
  perPage?: number;
  withTrashed?: boolean;
  order?: string;
  sort?: 'asc' | 'desc';
  search?: string;
  status?: string;
}

export function getPaginatedTasks(params: PaginatedTasksParams = {}) {
  const {
    page = 1,
    perPage = 9,
    withTrashed = false,
    order = 'created_at',
    sort = 'desc',
    search = '',
    status = ''
  } = params;

  return api.get('/tasks', {
    params: {
      page,
      perPage,
      withTrashed,
      order,
      sort,
      search,
      status
    }
  });
}
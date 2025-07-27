export interface PaginationInterface {
  total: number;
  lastPage: number;
  currentPage: number;
  next: number | null;
  perPage: number;
  prev: number | null;
}
export interface TableColumnInterface<T> {
  key: keyof T;
  title: string;
  sortable?: boolean;
}

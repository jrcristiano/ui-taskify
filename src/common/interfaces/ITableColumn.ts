export interface ITableColumn<T> {
  key: keyof T;
  title: string;
  sortable?: boolean;
}


import type { OrderDirection } from "../../types/OrderDirection";
import type { TableColumnInterface } from "./task.column.interface";

export interface ITableProps<T> {
  data: T[];
  columns: TableColumnInterface<T>[];
  defaultSort?: {
    key: keyof T;
    direction: OrderDirection;
  };
}
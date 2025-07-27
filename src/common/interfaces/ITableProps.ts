import type { OrderDirection } from "../types/OrderDirection";
import type { ITableColumn } from "./ITableColumn";

export interface ITableProps<T> {
  data: T[];
  columns: ITableColumn<T>[];
  defaultSort?: {
    key: keyof T;
    direction: OrderDirection;
  };
}
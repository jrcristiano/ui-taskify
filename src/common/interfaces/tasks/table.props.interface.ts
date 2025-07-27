
import type { OrderDirection } from "../../types/OrderDirection";
import type { TableColumnInterface } from "./task.column.interface";

export interface TablePropsInterface<T> {
  data: T[];
  setData: any;
  columns: TableColumnInterface<T>[];
  defaultSort?: {
    key: keyof T;
    direction: OrderDirection;
  };
}
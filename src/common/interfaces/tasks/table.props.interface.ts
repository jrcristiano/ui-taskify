
import type { OrderDirection } from "../../types/OrderDirection";
import type { TableColumnInterface } from "./task.column.interface";
import type { TaskFilterInterface } from "./task.filter.interface";

export interface TablePropsInterface<T> {
  data: T[];
  setData: any;
  filter: TaskFilterInterface;
  setFilter: any;
  columns: TableColumnInterface<T>[];
  defaultSort?: {
    key: keyof T;
    direction: OrderDirection;
  };
}
import type { Id } from "react-toastify";

export interface TaskTableDataInterface {
  id: string;
  title: string;
  description: string;
  status: {
    id: Id;
    name: string;
  };
  createdAt: Date;
}
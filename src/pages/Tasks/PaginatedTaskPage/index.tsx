import { useEffect, useState } from "react";
import type { TableColumnInterface } from "../../../common/interfaces/tasks/task.column.interface";
import type { TaskInterface } from "../../../common/interfaces/tasks/task.interface";
import type { TaskTableDataInterface } from "../../../common/interfaces/tasks/task.table.data.interface";
import { TaskTable } from "../../../components/TaskTable";
import { getPaginatedTasks } from "../../../services/tasks/get.paginated.tasks.service";
import { showErrorToast } from "../../../components/ErrorToast";
import type { PaginationInterface } from "../../../common/interfaces/pagination/pagination.interface";

const columns: TableColumnInterface<TaskInterface>[] = [
  { key: 'id', title: 'id', sortable: true },
  { key: 'title', title: 'Título', sortable: true },
  { key: 'description', title: 'Descrição', sortable: true },
  { key: 'status', title: 'Status', sortable: true },
  { key: 'createdAt', title: 'Criado em', sortable: true },
  { key: 'actions', title: 'Ações', sortable: false },
];

export default function PaginatedTaskPage() {
  const [tasks, setTasks] = useState<TaskTableDataInterface[]>([]);
  const [pagination, setPagination] = useState<PaginationInterface>({} as PaginationInterface);

  const handleGetPaginatedTasks = async () => {
    try {
      const res: any = await getPaginatedTasks();
      setTasks(res.data.data);
      setPagination(res.data.meta);
    } catch (error) {
      showErrorToast('Erro ao obter dados de tarefas.');
    }
  }

  useEffect(() => {
    handleGetPaginatedTasks();
  }, []);

  return (
    <>
      <TaskTable
        columns={columns}
        setData={setTasks}
        data={tasks}
        pagination={pagination}
      />
    </>
  );
}

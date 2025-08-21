import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HttpStatusCode } from '../../common/enums/http.status.code.enum';
import type { TablePropsInterface } from '../../common/interfaces/tasks/table.props.interface';
import type { TaskTableDataInterface } from '../../common/interfaces/tasks/task.table.data.interface';
import type { Id } from '../../common/types/Id';
import type { OrderDirection } from '../../common/types/OrderDirection';
import { formatDateToGMT3 } from '../../common/utils/date';
import { deleteTask } from '../../services/tasks/delete.task.service';
import { showSuccessToast } from '../SuccessToast';
import { TaskFilter } from '../TaskFilter';
import TaskPaginator from '../TaskPaginator';
import { TextEllipsis } from '../TextEllipsis';

const statusColors: any = {
  'Pendente': 'bg-yellow-100 text-yellow-700',
  'Concluída': 'bg-green-100 text-green-700',
};

export function TaskSortableTable<T extends TaskTableDataInterface>({
  data,
  setData,
  columns,
  defaultSort,
}: TablePropsInterface<T>) {
  const navigate = useNavigate();

  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: OrderDirection;
  }>(
    defaultSort || {
      key: 'createdAt',
      direction: 'desc',
    }
  );

  const sortedData = useMemo(() => {
    const sortableItems = [...data];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue instanceof Date && bValue instanceof Date) {
          return sortConfig.direction === 'asc'
            ? aValue.getTime() - bValue.getTime()
            : bValue.getTime() - aValue.getTime();
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }

        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }

        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: OrderDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({
      key,
      direction,
    });
  };

  const handleDestroyTaskById = async (id: Id) => {
    if (!confirm('Deseja mesmo excluir essa tarefa?')) {
      return;
    }

    const res = await deleteTask(id);
    if (res.status !== HttpStatusCode.NoContent) {
      return;
    }

    setData((prevData: any[]) => prevData.filter((task: any) => task.id !== id));
    showSuccessToast('Tarefa removida com sucesso.');
  }

  const handleEditTaskById = (id: Id) => navigate(`/task/${id}/edit`);

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-200 rounded-lg ">
        <thead className="bg-[#f09700] rounded-lg">
          <tr className='rounded-lg'>
            {columns.map((column: any) => (
              <th
                key={column.key as string}
                scope="col"
                className={`'rounded-lg px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider ${column.sortable ? 'cursor-pointer hover:text-[#002963]' : ''}`}
                onClick={() => column.sortable && requestSort(column.key)}
              >
                <div className="flex items-center rounded-lg py-1">
                  {column.title}
                  {column.sortable && (
                    <span className="ml-1">
                      {sortConfig.key === column.key
                        ? sortConfig.direction === 'asc'
                          ? <i className="bi bi-arrow-up"></i>
                          : <i className="bi bi-arrow-down"></i>
                        : <i className="bi bi-arrow-down-up"></i>}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        {sortedData.length > 0 ? (
          <tbody className="rounded-lg bg-white divide-y divide-gray-200">
            {sortedData.map((item, index) => (
              <tr key={item.id} className={`rounded-lg rounded-lg ${index % 2 == 0 ? 'bg-white' : 'bg-gray-100'}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  <TextEllipsis text={item.title} lines={1} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <TextEllipsis text={item.description || 'N/A'} lines={1} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[item.status.name]}`}
                  >
                    {item.status?.name}
                  </span>
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  {formatDateToGMT3(item.createdAt.toString())}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleEditTaskById(item.id)}
                    className="cursor-pointer me-1 bg-[#002963] font-bold hover:opacity-90 text-white px-3 py-2 shadow-lg rounded-lg transition-colors"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    onClick={() => handleDestroyTaskById(item.id)}
                    className="cursor-pointer bg-[#dc3545] font-bold hover:opacity-85 text-white px-3 py-2 shadow-lg rounded-lg transition-colors"
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody className='rounded-lg bg-white divide-y divide-gray-200'>
            <tr>
              <td className="bg-gray-100 text-center text-gray-800 py-4" colSpan={6}>
                Não há tarefas a serem exibidas
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export function TaskTable({
  columns,
  data,
  setData,
  filter,
  setFilter,
  pagination,
}: any) {
  return (
    <div className="">
      <div className="flex justify-between py-2">
        <h2 className="text-4xl font-semibold text-gray-800">
          Tarefas
        </h2>

        <Link
          className="cursor-pointer me-1 bg-[#f09700] font-semibold hover:opacity-90 text-white px-4 py-2 shadow-lg rounded-lg transition-colors"
          to="/task/create"
        >
          <i className="bi bi-plus-lg font-bold me-1"></i>Nova tarefa
        </Link>
      </div>

      <div className="w-full">
        <TaskFilter
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <TaskSortableTable
        data={data}
        setData={setData}
        filter={filter}
        setFilter={setFilter}
        columns={columns}
      />

      <TaskPaginator
        filter={filter}
        setFilter={setFilter}
        pagination={pagination}
      />
    </div>
  );
}
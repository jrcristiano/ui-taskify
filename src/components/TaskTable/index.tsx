import { useState, useMemo } from 'react';
import type { ITableData } from '../../common/interfaces/ITableData';
import type { ITableProps } from '../../common/interfaces/ITableProps';
import type { OrderDirection } from '../../common/types/OrderDirection';
import { TaskFilter } from '../TaskFilter';
import { TextEllipsis } from '../TextEllipsis';
import { Link } from 'react-router-dom';
import type { Id } from '../../common/types/Id';

const statusColors = {
  'Pendente': 'bg-yellow-100 text-yellow-700',
  'Concluída': 'bg-green-100 text-green-700',
};

export function TaskSortableTable<T extends ITableData>({
  data,
  columns,
  defaultSort,
}: ITableProps<T>) {
  console.log(columns)
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

  const handleDestroyTaskById = (id: Id) => {
    if (!confirm('Deseja mesmo excluir essa tarefa?')) {
      return;
    }

    alert('Excluido ID' + id)
  }

  const handleEditTaskById = (id: Id) => {
    if (!confirm('Deseja mesmo excluir essa tarefa?')) {
      return;
    }

    alert('Editado ID: ' + id)
  }

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
                <TextEllipsis text={item.description} lines={1} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[item.status]}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                {item.createdAt.toLocaleDateString()}
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
      </table>
    </div>
  );
}

export function TaskTable({ columns, data }: any) {
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
        <TaskFilter />
      </div>

      <TaskSortableTable
        data={data}
        columns={columns}
      />
    </div>
  );
}
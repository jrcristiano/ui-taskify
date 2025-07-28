import { TaskStatus } from "../../common/enums/task.status.enum";
import type { TaskFilterInterface } from "../../common/interfaces/tasks/task.filter.interface";
interface TaskFilterProps {
  filter: TaskFilterInterface;
  setFilter: (filter: any) => void;
}

export function TaskFilter({ 
  filter, 
  setFilter,
}: TaskFilterProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFilter({
      ...filter,
      search: event.target.value,
      page: 1,
    });
  };

  const handleStatus = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    setFilter((prevState: any) => ({
      ...prevState,
      status: event.target.value,
      page: 1,
    }));
  };

  return (
    <div className="w-full rounded-lg bg-white py-5 flex flex-col md:flex-row gap-4">
      <div className="flex-grow">
        <input
          type="text"
          placeholder="Pesquisar tarefa por título"
          className="w-full shadow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f09700]"
          onChange={handleSearch}
          value={filter.search || ''}
        />
      </div>

      <select
        onChange={handleStatus}
        value={filter.status || 'Todas'}
        className="shadow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f09700]"
      >
        <option value={TaskStatus.ALL}>
          Todos os status
        </option>
        <option value={TaskStatus.PENDING}>
          Pendentes
        </option>
        <option value={TaskStatus.DONE}>
          Concluídas
        </option>
      </select>
    </div>
  );
}

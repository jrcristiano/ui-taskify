import { useStatusParam } from "../../hooks/use.status.param";

export function TaskFilter() {
  const status = useStatusParam();

  return (
    <div className="w-full rounded-lg bg-white py-5 flex flex-col md:flex-row gap-4">
      <div className="flex-grow">
        <input
          type="text"
          placeholder="Pesquisar tarefa por título"
          className="w-full shadow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f09700]"
        />
      </div>

      <select className="shadow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f09700]">
        <option
          selected={status === null || status === 'Todas'}
          value="Todas"
        >
          Todos os status
        </option>
        <option
          selected={status === 'Pendentes'}
          value="Pendentes">
          Pendentes
        </option>
        <option
          selected={status === 'Concluídas'}
          value="Concluídas">
          Concluídas
        </option>
      </select>

      <button
        className="cursor-pointer px-4 shadow py-2 rounded-lg flex items-center justify-center text-white hover:opacity-85 transition-opacity"
        style={{ backgroundColor: '#002963' }}
      >
        <i className="bi bi-search" />
      </button>
    </div>
  );
};
import type { ITableColumn } from "../../common/interfaces/ITableColumn";
import type { ITableData } from "../../common/interfaces/ITableData";
import type { ITask } from "../../common/interfaces/ITask";
import TaskPaginator from "../../components/@Paginators/TaskPaginator";
import { TaskTable } from "../../components/@Tables/TaskTable";

export default function Home() {
  const columns: ITableColumn<ITask>[] = [
    { key: 'id', title: 'id', sortable: true },
    { key: 'title', title: 'Título', sortable: true },
    { key: 'description', title: 'Descrição', sortable: true },
    { key: 'status', title: 'Status', sortable: true },
    { key: 'createdAt', title: 'Criado em', sortable: true },
    { key: 'actions', title: 'Ações', sortable: false },
  ];

  const data: ITableData[] = [
    {
      id: '1',
      title: 'Tarefa importante',
      description: 'Finalizar o projeto até sexta-feira',
      status: 'Concluída',
      createdAt: new Date('2023-05-15'),
    },
    {
      id: '2',
      title: 'Reunião de equipe',
      description: 'Discutir progresso do sprint',
      status: 'Pendente',
      createdAt: new Date('2023-05-10'),
    },
    {
      id: '3',
      title: 'Atualizar documentação',
      description: 'Adicionar novas funcionalidades à documentação',
      status: 'Pendente',
      createdAt: new Date('2023-05-18'),
    },
    {
      id: '4',
      title: 'Bug crítico',
      description: 'Corrigir falha no sistema de login',
      status: 'Pendente',
      createdAt: new Date('2023-05-05'),
    },
    {
      id: '5',
      title: 'Tarefa importante',
      description: 'Finalizar o projeto até sexta-feira',
      status: 'Concluída',
      createdAt: new Date('2023-05-15'),
    },
    {
      id: '6',
      title: 'Reunião de equipe',
      description: 'Discutir progresso do sprint',
      status: 'Pendente',
      createdAt: new Date('2023-05-10'),
    },
    {
      id: '7',
      title: 'Atualizar documentação',
      description: 'Adicionar novas funcionalidades à documentação',
      status: 'Pendente',
      createdAt: new Date('2023-05-18'),
    },
    {
      id: '8',
      title: 'Bug crítico',
      description: 'Corrigir falha no sistema de login',
      status: 'Pendente',
      createdAt: new Date('2023-05-05'),
    },
    {
      id: '9',
      title: 'Bug crítico',
      description: 'Corrigir falha no sistema de login',
      status: 'Pendente',
      createdAt: new Date('2023-05-05'),
    },
  ];

  return (
    <>
      <TaskTable columns={columns} data={data} />
      <TaskPaginator />
    </>
  );
}

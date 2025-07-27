export interface ITableData {
  id: string;
  title: string;
  description: string;
  status: 'Pendente' | 'Concluída';
  createdAt: Date;
}
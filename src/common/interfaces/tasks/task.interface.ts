export interface TaskInterface {
  id: string;
  title: string;
  description: string;
  status: 'Pendente' | 'Concluída';
  createdAt: Date;
  actions?: any,
}
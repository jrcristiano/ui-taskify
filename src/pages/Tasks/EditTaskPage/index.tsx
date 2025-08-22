import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { HttpStatusCode } from '../../../common/enums/http.status.code.enum';
import { TaskStatus } from '../../../common/enums/task.status.enum';
import type { FormTaskInterface } from '../../../common/interfaces/tasks/form.task.interface';
import { showErrorToast } from '../../../components/ErrorToast';
import { showSuccessToast } from '../../../components/SuccessToast';
import { getTaskById } from '../../../services/tasks/get.task.by.id.service';
import { updateTask } from '../../../services/tasks/update.task.service';

const EditTaskPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const initialValues: FormTaskInterface = {
    title: '',
    description: '',
    statusId: TaskStatus.PENDING,
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'O título deve ter pelo menos 2 caracteres')
      .required('Título é obrigatório'),
    description: Yup.string(),
    statusId: Yup.number().required('Status é obrigatório'),
  });

  const onSubmit = async (values: FormTaskInterface) => {
    setIsSubmitting(true);

    try {
      if (!id) return;
      
      const res = await updateTask(+id, values);
      if (res.status === HttpStatusCode.OK) {
        showSuccessToast('Tarefa editada com sucesso.');
        navigate('/');
      }
    } catch (error) {
      showErrorToast('Ocorreu um erro ao editar a tarefa. Por favor, tente novamente.');
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        if (!id) return;
        
        const res = await getTaskById(id) as any;

        if (res.status === HttpStatusCode.OK && res.data) {
          formik.setValues({
            title: res.data.title,
            description: res.data.description || '',
            statusId: res.data.statusId,
          });
        }
      } catch (error) {
        showErrorToast('Ocorreu um erro ao carregar a tarefa. Por favor, tente novamente.');
        setIsLoading(false);
      }
    };

    fetchTask();
  }, [id, formik]);

  if (isLoading) {
    return <div className="mx-auto p-4 bg-white rounded-lg">Carregando...</div>;
  }

  return (
    <div className="mx-auto p-4 bg-white rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Editar tarefa</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-bold text-gray-700">
            Título <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="mt-1 text-sm text-red-600">{formik.errors.title}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-bold text-gray-700">
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="statusId" className="block text-sm font-bold text-gray-700">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            id="statusId"
            name="statusId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.statusId}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value={TaskStatus.PENDING}>Pendente</option>
            <option value={TaskStatus.DONE}>Concluída</option>
          </select>
          {formik.touched.statusId && formik.errors.statusId ? (
            <div className="mt-1 text-sm text-red-600">{formik.errors.statusId}</div>
          ) : null}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex justify-end py-2 px-5 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-[#f09700] hover:opacity-90 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskPage;
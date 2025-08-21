import { useState } from 'react';
import Paginator from '../Paginator';

const TaskPaginator = ({ pagination, filter, setFilter }: any) => {
  const [, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setFilter({
      ...filter,
      page,
    });
  };

  return (
    <div className="p-4 bg-white">
      <Paginator
        currentPage={filter.page}
        totalPages={pagination.lastPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TaskPaginator;
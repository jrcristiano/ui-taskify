import { useState } from 'react';
import Paginator from '../Paginator';

const TaskPaginator = ({ pagination }: any) => {
  const [currentPage, setCurrentPage] = useState(pagination.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 bg-white">
      <Paginator
        currentPage={currentPage}
        totalPages={pagination.lastPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TaskPaginator;
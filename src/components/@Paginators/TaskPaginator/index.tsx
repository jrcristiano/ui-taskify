import React, { useState } from 'react';
import Paginator from '../Paginator';

const TaskPaginator: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

  };

  return (
    <div className="p-4 bg-white">
      <Paginator 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default TaskPaginator;
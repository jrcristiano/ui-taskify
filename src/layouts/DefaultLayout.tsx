
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { PersistentDrawer } from '../components/PersistentDrawer'
import { ToastContainer } from "react-toastify";

export default function DefaultLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white">
      <PersistentDrawer />
      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4 flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-lg bg-gray-200"
            >
              Menu
            </button>
            <h2 className="text-xl font-bold text-gray-800">
              <i className="bi bi-rocket-takeoff me-1 text-blue-600"></i> Gerenciador de tarefas
            </h2>
            <div className="flex items-center space-x-4">
              Usuário
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto mt-4 px-4">
          <Outlet />
        </main>
        <ToastContainer />
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import { useStatusParam } from '../../hooks/use.status.param';

export function PersistentDrawer() {
  const status = useStatusParam();

  return (
    <aside className="w-72 h-screen bg-gradient-to-b from-[#002963] to-[#001a3d] text-white py-6 px-3 flex flex-col shadow-xl">
      <div className="mb-10 flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-full" />
      </div>

      <nav className="flex-1 space-y-6">
        <div>
          <span className="text-gray-300 uppercase text-xs font-semibold tracking-wider block mb-3 px-2">
            Menu
          </span>
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                  status === null || status === 'Todas'
                    ? 'bg-[#f09700] text-white font-medium shadow-md'
                    : 'text-gray-300 hover:bg-[#00387a] hover:text-white'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Tarefas
              </Link>
            </li>
            <li>
              <Link
                to="/?status=Pendentes"
                className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                  status === 'Pendentes'
                    ? 'bg-[#f09700] text-white font-medium shadow-md'
                    : 'text-gray-300 hover:bg-[#00387a] hover:text-white'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Pendentes
              </Link>
            </li>
            <li>
              <Link
                to="/?status=Concluídas"
                className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                  status === 'Concluídas'
                    ? 'bg-[#f09700] text-white font-medium shadow-md'
                    : 'text-gray-300 hover:bg-[#00387a] hover:text-white'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Concluídas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="text-gray-300 uppercase text-xs font-semibold tracking-wider block mb-3 px-2">
            Atalhos
          </span>
          <ul className="space-y-1">
            <li>
              <Link
                to="#"
                className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-[#00387a] hover:text-white transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Perfil
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-[#00387a] hover:text-white transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Configurações
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="flex items-center p-2 rounded-lg hover:bg-[#00387a] transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-3">
            <span className="text-sm font-medium">US</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs text-gray-400">user@example.com</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
}
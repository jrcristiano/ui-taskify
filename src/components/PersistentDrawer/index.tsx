import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import { getUser, removeUser } from '../../services/auth/user.session.service';
import { removeToken } from '../../services/auth/token.service';
import { useLocation } from 'react-router-dom';

export function PersistentDrawer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const user = getUser();

  const handleLogout = () => {
    removeUser();
    removeToken();
    navigate('/login');
  }

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
                className={`flex items-center p-3 rounded-lg transition-all duration-200 ${pathname === '/'
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
            <li>
              <button
                onClick={handleLogout}
                className="w-full cursor-pointer flex items-center p-3 rounded-lg text-gray-300 hover:bg-[#00387a] hover:text-white transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Sair
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="flex items-center p-2 rounded-lg hover:bg-[#00387a] transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-3">
            <span className="text-sm font-medium">
              {user?.name.charAt(0)}{user?.lastname.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">
              {user?.name} {user?.lastname}
            </p>
            <p className="text-xs text-gray-400">{user?.email}</p>
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
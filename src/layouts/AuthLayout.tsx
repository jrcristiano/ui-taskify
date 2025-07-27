import { Link, Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo com imagem ou cor */}
      <div className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center text-white p-10">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-4">Bem-vindo de volta!</h2>
          <p className="text-lg">Acesse sua conta ou crie uma nova para continuar.</p>
        </div>
      </div>

      {/* Lado direito com o formulário */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <Link to="/" className="text-4xl font-bold text-blue-600">
              GSW
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

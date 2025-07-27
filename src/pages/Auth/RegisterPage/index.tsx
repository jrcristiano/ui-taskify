import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Criar conta</h1>
      <form className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f09700]"
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f09700]"
          />
        </div>
        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f09700]"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f09700]"
        />
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#002963] text-white py-2 rounded-md hover:opacity-90"
        >
          Cadastrar
        </button>
      </form>
      <p className="text-center text-sm mt-4">
        Já tem uma conta?
        <Link
          to="/login"
          className="ms-1 text-[#002963] underline"
        >
          Entrar
        </Link>
      </p>
    </div>
  );
}

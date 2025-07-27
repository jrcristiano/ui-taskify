import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Criar conta</h1>
      <form className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Cadastrar
        </button>
      </form>
      <p className="text-center text-sm mt-4">
        Já tem uma conta?
        <Link to="/login" className="ms-1 text-blue-600 underline">
          Entrar
        </Link>
      </p>
    </div>
  );
}

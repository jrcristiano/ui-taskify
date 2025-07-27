import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Entrar na conta</h1>
      <form className="space-y-4">
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
          Entrar
        </button>
      </form>
      <p className="text-center text-sm mt-4">
        Não tem uma conta?
        <Link to="/register" className="ms-1 text-blue-600 underline">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}

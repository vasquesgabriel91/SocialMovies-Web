import { useState } from "react";
import { useAuth } from "../../hooks/auth/useAuth";

export default function LoginForm() {
  const { login, loading } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await login(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

      <input
        type="text"
        placeholder="Usuário"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}

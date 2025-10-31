import { useState } from "react";
import { useRegisterUser } from "../../hooks/user/createUser";

export default function RegisterForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const { register, loading, error, success } = useRegisterUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(form);
      setForm({ username: "", email: "", password: "" }); 
    } catch {
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        name="username"
        placeholder="Nome de usuário"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        disabled={loading}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        disabled={loading}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        disabled={loading}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}

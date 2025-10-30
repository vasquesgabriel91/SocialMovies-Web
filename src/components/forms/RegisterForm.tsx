import { useState } from "react";
import { useRegisterUser } from "../../hooks/user/createUser";

export default function RegisterForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const { register, response, loading, error } = useRegisterUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({
        username: form.username,
        email: form.email,
        password: form.password,
      });
    } catch {
      // erro já tratado no hook
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome de usuário"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {response && <p style={{ color: "green" }}>{response.message}</p>}
    </form>
  );
}

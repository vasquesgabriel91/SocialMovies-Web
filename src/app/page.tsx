"use client";

import { useState } from "react";
import Modal from "../components/ui/Modal";
import RegisterForm from "../components/forms/RegisterForm";

export const metadata = {
  title: "SocialMovies | Página inicial",
  description: "Explore, salve e compartilhe seus filmes favoritos.",
};

export default function Home() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Bem-vindo ao SocialMovies 🎬</h1>

      <button
        onClick={() => setShowRegisterModal(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Criar Conta
      </button>

      <Modal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)}>
        <h2 className="text-xl font-semibold mb-4 text-center">Cadastro</h2>
        <RegisterForm />
      </Modal>
    </main>
  );
}

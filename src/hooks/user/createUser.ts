import { useState } from "react";
import { userService } from "../../services/user/createUser";
import { CreateUserRequest, CreateUserResponse } from "../../types/user/createUser";

export function useRegisterUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [response, setResponse] = useState<CreateUserResponse | null>(null);

  const register = async (data: CreateUserRequest) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const res = await userService.createUser(data);
      setResponse(res);
      setSuccess("Usuário criado com sucesso!");

      localStorage.setItem("token", res.token);

      return res;
    } catch (err: any) {
      console.error("Erro ao criar usuário:", err);
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Erro ao criar usuário";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { register, response, loading, error, success };
}

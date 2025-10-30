import { useState } from "react";
import { userService } from "../../services/user/createUser";
import { CreateUserRequest, CreateUserResponse } from "../../types/user/createUser";

export function useRegisterUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<CreateUserResponse | null>(null);

  const register = async (data: CreateUserRequest) => {
    try {
      setLoading(true);
      setError(null);

      const res = await userService.createUser(data);
      setResponse(res);

          localStorage.setItem("token", res.token);

      return res;
    } catch (err: any) {
      setError(err.response?.data?.error || "Erro ao criar usuário");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { register, response, loading, error };
}

import api  from "../../lib/api";

import { AuthRequest, AuthResponse } from "../../types/auth";

export const authService = {
  async login(data: AuthRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/login", data);
    return response.data;
  },
};

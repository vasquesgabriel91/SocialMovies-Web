import api from "../../lib/api";
import { CreateUserRequest, CreateUserResponse } from "../../types/user/createUser";

const endpoint = "/user";

const createUser = async (data: CreateUserRequest): Promise<CreateUserResponse> => {
    const response = await api.post<CreateUserResponse>(endpoint, data);
    return response.data;
};

export const userService = {
  createUser,
};
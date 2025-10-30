export interface CreateUserRequest {
    username: string;
    password: string;
    email: string;
}
export interface CreateUserResponse {
    message: string
    id: string;
    username: string;
    email: string;
    password: string;
    token: string;

}
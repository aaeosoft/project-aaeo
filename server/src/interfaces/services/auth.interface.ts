import { User } from "../../dto/User";

export interface IAuthService {
    login(username: string, password: string): Promise<{ [key: string]: string | number }>;

    register(user: User): Promise<User>;

    forgotPassword(email: string): Promise<Boolean>;
}
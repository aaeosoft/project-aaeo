import { User } from "../../dto/User";

export interface IUserRepository {
    getByEmail(email: string): Promise<User | null>;

    getEmailIsExist(email: string): Promise<boolean>;

    create(user: User): Promise<User | null>;
}
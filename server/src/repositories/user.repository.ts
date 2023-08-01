import { User } from "../dto/User";
import { IUserRepository } from "../interfaces/repositories/user.interface";
import { UserModel } from "../models/user.model";

export class UserRepository implements IUserRepository {
    public async getByEmail(email: string): Promise<User | null> {
        const user = await UserModel.where('email', email).findOne();

        if (!user) return null;

        return User.fromModel(user);
    }

    public async getEmailIsExist(email: string): Promise<boolean> {
        const count = await UserModel.where('email', email).count();

        return count > 0;
    }

    public async create(user: User): Promise<User | null> {
        const createdUser = await UserModel.create({
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            password: user.getPassword(),
            isActive: user.getIsActive(),
        });

        return User.fromModel(createdUser);
    }
}
import { Model } from "mongoose";
import { User } from "../dto/User";
import { IUserRepository } from "../interfaces/repositories/user.interface";
import { UserModel } from "../models/user.model";
import IUserSchema from "../interfaces/models/user.schema.interface";

export class UserRepository implements IUserRepository {
  private model: Model<IUserSchema>;

  constructor() {
    this.model = UserModel;
  }

  public async getByEmail(email: string): Promise<User | null> {
    const user = await this.model.where("email", email).findOne();

    if (!user) return null;

    return User.fromModel(user);
  }

  public async getEmailIsExist(email: string): Promise<boolean> {
    const count = await this.model.where("email", email).count();

    return count > 0;
  }

  public async create(user: User): Promise<User | null> {
    const createdUser = await this.model.create({
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
      password: user.getPassword(),
      isActive: user.getIsActive(),
    });

    return User.fromModel(createdUser);
  }
}

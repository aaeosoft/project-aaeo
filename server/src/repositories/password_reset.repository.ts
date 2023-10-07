import { Model } from "mongoose";
import IPasswordResetSchema from "../interfaces/models/password_reset.schema.interface";
import { passwordResetModel } from "../models/password_reset.model";
import { IPasswordResetRepository } from "../interfaces/repositories/password_reset.interface";
import { User } from "../dto/User";
import { PasswordReset } from "../dto/PasswordReset";

export class PasswordResetRepository implements IPasswordResetRepository {
  private static instance: PasswordResetRepository;
  private model: Model<IPasswordResetSchema>;

  constructor() {
    this.model = passwordResetModel;
  }

  public static getInstance(): PasswordResetRepository {
    if (!PasswordResetRepository.instance) {
      PasswordResetRepository.instance = new PasswordResetRepository();
    }

    return PasswordResetRepository.instance;
  }

  public async isExistToken(user: User): Promise<boolean> {
    const count = await this.model.where("email", user.getEmail()).count();

    return count > 0;
  }

  public async deleteTokens(user: User): Promise<boolean> {
    try {
      await this.model.deleteMany({
        email: user.getEmail(),
      });

      return true;
    } catch (err: any) {
      return false;
    }
  }

  public async createResetPasswordToken(
    user: User,
    token: string
  ): Promise<null | PasswordReset> {
    const resetModel = await this.model.create({
      email: user.getEmail(),
      token: token,
    });

    return PasswordReset.fromModel(resetModel);
  }
}

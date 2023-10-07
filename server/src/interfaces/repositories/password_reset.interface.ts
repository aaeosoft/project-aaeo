import { PasswordReset } from "../../dto/PasswordReset";
import { User } from "../../dto/User";

export interface IPasswordResetRepository {
  isExistToken(user: User): Promise<boolean>;

  deleteTokens(user: User): Promise<boolean>;

  createResetPasswordToken(
    user: User,
    token: string
  ): Promise<null | PasswordReset>;
}

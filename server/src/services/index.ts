import { IAuthService } from "../interfaces/services/auth.interface";
import { ICryptService } from "../interfaces/services/crypt.interface";
import { ITokenService } from "../interfaces/services/token.interface";
import { PasswordResetRepository } from "../repositories/password_reset.repository";
import { UserRepository } from "../repositories/user.repository";
import { AuthService } from "./auth.service";
import { CryptService } from "./crypt.service";
import { TokenService } from "./token.service";

export const authService = (): IAuthService => {
  const userRepository = new UserRepository();
  const tService = tokenService();
  const cService = cryptService();
  const passwordRepository = new PasswordResetRepository();

  return new AuthService(
    userRepository,
    tService,
    cService,
    passwordRepository
  );
};

export const cryptService = (): ICryptService => {
  return new CryptService();
};

export const tokenService = (): ITokenService => {
  return new TokenService();
};

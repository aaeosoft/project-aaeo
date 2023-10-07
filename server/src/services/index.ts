import { IAuthService } from "../interfaces/services/auth.interface";
import { ICryptService } from "../interfaces/services/crypt.interface";
import { ITokenService } from "../interfaces/services/token.interface";
import { PasswordResetRepository } from "../repositories/password_reset.repository";
import { UserRepository } from "../repositories/user.repository";
import { AuthService } from "./auth.service";
import { CryptService } from "./crypt.service";
import { TokenService } from "./token.service";

export const authService = (): IAuthService => {
  return AuthService.getInstance();
};

export const cryptService = (): ICryptService => {
  return CryptService.getInstance();
};

export const tokenService = (): ITokenService => {
  return TokenService.getInstance();
};

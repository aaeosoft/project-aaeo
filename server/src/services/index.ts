import { IAuthService } from "../interfaces/services/auth.interface";
import { ICryptService } from "../interfaces/services/crypt.service";
import { ITokenService } from "../interfaces/services/token.service";
import { UserRepository } from "../repositories/user.repository";
import { AuthService } from "./auth.service";
import { CryptService } from "./crypt.service";
import { TokenService } from "./token.service";


export const authService = (): IAuthService => {
    const userRepository = new UserRepository();
    const tService = tokenService();
    const cService = cryptService();

    return new AuthService(userRepository, tService, cService);
};

export const cryptService = (): ICryptService => {
    return new CryptService();
};

export const tokenService = (): ITokenService => {
    return new TokenService();
};
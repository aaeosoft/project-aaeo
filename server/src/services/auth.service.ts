import { IUserRepository } from "../interfaces/repositories/user.interface";
import { IAuthService } from "../interfaces/services/auth.interface";
import { UserNotFoundError } from "../exceptions/user/UserNotFoundError";
import { UserWrongInformationError } from "../exceptions/user/UserWrongInformationError";
import { ITokenService } from "../interfaces/services/token.interface";
import { User } from "../dto/User";
import { ICryptService } from "../interfaces/services/crypt.interface";
import { UserEmailAlreadExistError } from "../exceptions/user/UserEmailAlreadExistError";
import { UserNotCreatedError } from "../exceptions/user/UserNotCreatedError";
import { PasswordResetRepository } from "../repositories/password_reset.repository";
import { IPasswordResetRepository } from "../interfaces/repositories/password_reset.interface";
import { TokenService } from "./token.service";
import { CryptService } from "./crypt.service";
import { UserRepository } from "../repositories/user.repository";
import { IEmailService } from "../interfaces/services/email.interface";
import { EmailService } from "./email.service";

export class AuthService implements IAuthService {
  private static instance: AuthService;

  userRepository: IUserRepository;
  tokenService: ITokenService;
  cryptService: ICryptService;
  emailService: IEmailService;
  passwordResetRepository: IPasswordResetRepository;

  constructor() {
    this.tokenService = TokenService.getInstance();
    this.cryptService = CryptService.getInstance();
    this.passwordResetRepository = PasswordResetRepository.getInstance();
    this.userRepository = UserRepository.getInstance();
    this.emailService = EmailService.getInstance();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }

    return AuthService.instance;
  }

  public async login(
    email: string,
    password: string
  ): Promise<{ [key: string]: string | number }> {
    const user = await this.userRepository.getByEmail(email);

    if (!user) {
      throw new UserNotFoundError();
    }

    if (!this.cryptService.verify_hashed(password, user.getPassword())) {
      throw new UserWrongInformationError();
    }

    const accessToken = this.tokenService.encode({
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
    });

    // Need refactor
    const refreshToken = this.tokenService.encode({
      email: user.getEmail(),
    });

    return {
      "access-token": accessToken,
      "refresh-token": refreshToken,
    };
  }

  public async register(user: User): Promise<User> {
    const user_exist = await this.userRepository.getEmailIsExist(
      user.getEmail()
    );

    if (user_exist) {
      throw new UserEmailAlreadExistError();
    }

    const userData = user.setPassword(
      this.cryptService.hash_string(user.getPassword())
    );

    const result = await this.userRepository.create(userData);

    if (!(result instanceof User)) {
      throw new UserNotCreatedError();
    }

    return result;
  }

  public async forgotPassword(email: string): Promise<Boolean> {
    const user = await this.userRepository.getByEmail(email);

    if (user == null) {
      throw new UserNotFoundError();
    }

    const isExist = await this.passwordResetRepository.isExistToken(user);

    if (isExist) {
      await this.passwordResetRepository.deleteTokens(user);
    }

    const expire_time = 15 * 60;

    const token = this.tokenService.encode(
      {
        email: user.getEmail(),
      },
      expire_time
    );

    const reset_token_data =
      await this.passwordResetRepository.createResetPasswordToken(user, token);

    await this.emailService.sendMail(
      user,
      "Şifre sıfırlama maili",
      "token değeri: " + reset_token_data?.getToken()
    );

    return true;
  }
}

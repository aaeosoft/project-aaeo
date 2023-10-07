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

export class AuthService implements IAuthService {
  userRepository: IUserRepository;
  tokenService: ITokenService;
  cryptService: ICryptService;
  passwordResetRepository: IPasswordResetRepository;

  constructor(
    userRepository: IUserRepository,
    tokenService: ITokenService,
    cryptService: ICryptService,
    passwordResetRepository: IPasswordResetRepository
  ) {
    this.userRepository = userRepository;
    this.tokenService = tokenService;
    this.cryptService = cryptService;
    this.passwordResetRepository = passwordResetRepository;
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

    return true;
  }
}

import { IUserRepository } from "../interfaces/repositories/user.interface";
import { IAuthService } from "../interfaces/services/auth.interface";
import { UserNotFoundError } from "../exceptions/user/UserNotFoundError";
import { UserWrongInformationError } from "../exceptions/user/UserWrongInformationError";
import { ITokenService } from "../interfaces/services/token.service";
import { User } from "../dto/User";
import { ICryptService } from "../interfaces/services/crypt.service";
import { UserEmailAlreadExistError } from "../exceptions/user/UserEmailAlreadExistError";
import { UserNotCreatedError } from "../exceptions/user/UserNotCreatedError";

export class AuthService implements IAuthService {
    userRepository: IUserRepository;
    tokenService: ITokenService;
    cryptService: ICryptService;

    constructor(userRepository: IUserRepository, tokenService: ITokenService, cryptService: ICryptService) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
        this.cryptService = cryptService;
    }

    public async login(email: string, password: string): Promise<{ [key: string]: string | number }> {
        const user = await this.userRepository.getByEmail(email);

        if (!user) {
            throw new UserNotFoundError();
        }

        if (!this.cryptService.verify_hashed(password, user.getPassword())) {
            throw new UserWrongInformationError();
        }

        const accessToken = this.tokenService.encode({
            "firstName": user.getFirstName(),
            "lastName": user.getLastName(),
            "email": user.getEmail(),
        });

        // Need refactor
        const refreshToken = this.tokenService.encode({
            "email": user.getEmail()
        });

        return {
            "access-token": accessToken,
            "refresh-token": refreshToken,
        };
    }

    public async register(user: User): Promise<User> {
        const user_exist = await this.userRepository.getEmailIsExist(user.getEmail());

        if (user_exist) {
            throw new UserEmailAlreadExistError();
        }

        const userData = user.setPassword(
            this.cryptService.hash_string(
                user.getPassword()
            )
        );

        const result = await this.userRepository.create(userData);

        if (!(result instanceof User)) {
            throw new UserNotCreatedError();
        }

        return result;
    }
}
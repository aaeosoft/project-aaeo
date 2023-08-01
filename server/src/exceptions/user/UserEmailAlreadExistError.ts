import { BaseError } from "../BaseException";

export class UserEmailAlreadExistError extends BaseError {
    constructor() {
        super("E-Posta adresi zaten kayıtlı.", "UserEmailAlreadExistError", 422);
    }
}
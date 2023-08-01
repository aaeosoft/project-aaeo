import { BaseError } from "../BaseException";

export class UserNotCreatedError extends BaseError {
    constructor() {
        super("Kullanıcı oluşturulamadı.", "UserNotCreatedError", 400);
    }
}
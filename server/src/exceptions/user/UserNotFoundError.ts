import { BaseError } from "../BaseException";

export class UserNotFoundError extends BaseError {
    constructor() {
        super("Kullanıcı bulunamadı.", "UserNotFoundError", 404);
    }
}
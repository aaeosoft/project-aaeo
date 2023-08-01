import { BaseError } from "../BaseException";

export class UserWrongInformationError extends BaseError {
    constructor() {
        super("Kullanıcı bilgileri yanlış.", "UserWrongInformationError", 400);
    }
}
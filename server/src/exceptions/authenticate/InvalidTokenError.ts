import { BaseError } from "../BaseException";

export class InvalidTokenError extends BaseError {
    constructor() {
        super("Token geçersiz.", "InvalidTokenError", 403);
    }
}
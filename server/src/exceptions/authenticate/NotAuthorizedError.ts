import { BaseError } from "../BaseException";

export class NotAuthorizedError extends BaseError {
    constructor() {
        super("Yetkiniz bulunmamaktadır.", "NotAuthorizedError", 403);
    }
}
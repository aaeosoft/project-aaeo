import { BaseError } from "../BaseException";

export class EmailNotSendedError extends BaseError {
  constructor() {
    super("E-Posta gönderilemedi.", "EmailNotSendedError", 200);
  }
}

import IPasswordResetSchema from "../interfaces/models/password_reset.schema.interface";

export class PasswordReset {
  private email: string;
  private token: string;

  constructor(email: string, token: string) {
    this.email = email;
    this.token = token;
  }

  public getEmail(): string {
    return this.email;
  }

  public getToken(): string {
    return this.token;
  }

  public static fromModel(reset: IPasswordResetSchema): PasswordReset {
    return new PasswordReset(reset.email, reset.token);
  }
}

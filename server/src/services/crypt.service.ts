import bcrypt from "bcrypt";
import { ICryptService } from "../interfaces/services/crypt.interface";

export class CryptService implements ICryptService {
  private static instance: CryptService;
  salt_round: number;

  constructor() {
    const DEFAULT_SALT_ROUND = 10;

    this.salt_round =
      process.env.SALT_ROUND != undefined
        ? parseInt(process.env.SALT_ROUND)
        : DEFAULT_SALT_ROUND;
  }

  public static getInstance(): CryptService {
    if (!CryptService.instance) {
      CryptService.instance = new CryptService();
    }

    return CryptService.instance;
  }

  private generate_salt(): string {
    return bcrypt.genSaltSync(this.salt_round);
  }

  public hash_string(text: string): string {
    const salt = this.generate_salt();

    return bcrypt.hashSync(text, salt);
  }

  public verify_hashed(text: string, hashed_text: string): boolean {
    return bcrypt.compareSync(text, hashed_text);
  }
}

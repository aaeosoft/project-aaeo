import { ITokenService } from "../interfaces/services/token.interface";
import * as jwt from "jsonwebtoken";
import path from "path";
import * as fs from "fs";
import { TokenData } from "../types/token_data";

export class TokenService implements ITokenService {
  private get_private_key(): Buffer {
    const keyPath = path.join(__dirname, "..", "..", "keys/jwt.key");

    return fs.readFileSync(keyPath);
  }

  expire_time(): number {
    return process.env.ACCESS_TOKEN_EXPIRE_TIME
      ? parseInt(process.env.ACCESS_TOKEN_EXPIRE_TIME)
      : 60 * 60 * 6;
  }

  encode(
    data: { [key: string]: string | number },
    expire_time: number | undefined
  ): string {
    return jwt.sign(data, this.get_private_key(), {
      algorithm: "RS256",
      expiresIn: expire_time !== undefined ? expire_time : this.expire_time(),
    });
  }

  decode(token: string): TokenData | undefined {
    try {
      const payload = jwt.verify(
        token,
        this.get_private_key()
      ) as jwt.JwtPayload;

      return {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        iat: payload.iat,
        exp: payload.exp,
      } as TokenData;
    } catch (err) {
      return undefined;
    }
  }
}

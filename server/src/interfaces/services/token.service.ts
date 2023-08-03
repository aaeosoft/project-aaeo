import { TokenData } from "../../types/token_data";

export interface ITokenService {
    expire_time(): number;
    
    encode(data: { [key: string]: string | number }): string;

    decode(token: string): TokenData | undefined;
}
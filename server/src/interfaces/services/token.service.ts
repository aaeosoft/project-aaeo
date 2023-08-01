export interface ITokenService {
    expire_time(): number;
    
    encode(data: { [key: string]: string | number }): string;
}
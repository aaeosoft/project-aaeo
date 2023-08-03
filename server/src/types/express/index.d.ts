import { TokenData } from "../token_data";

export { }

declare global {
    namespace Express {
        export interface Request {
            user?: TokenData;
        }
    }
}
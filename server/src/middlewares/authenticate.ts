import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../exceptions/authenticate/NotAuthorizedError";
import { tokenService } from "../services";
import { InvalidTokenError } from "../exceptions/authenticate/InvalidTokenError";

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;

        if (token === undefined) {
            throw new NotAuthorizedError();
        }

        const data = tokenService().decode(token);

        if(data === undefined) {
            throw new InvalidTokenError();
        }

        req.user = data;

        next();
    } catch (err) {
        next(err);
    }
};

export default authenticate;
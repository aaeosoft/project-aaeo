import { NextFunction, Request, Response } from "express";
import { authService } from "../services";
import { User } from "../dto/User";

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        const result = await authService().login(email, password);

        return res.json(result);
    } catch (err: any) {
        next(err);
    }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password, passwordConfirmation } = req.body;

    try {
        const user = new User(firstName, lastName, email, password);

        return res.json(await authService().register(user));
    } catch (err: any) {
        next(err);
    }
};

const sendResetPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    try {
        const sendMail = await authService().forgotPassword(email);
    } catch (err: any) {
        next(err);
    }
};

export default {
    login,
    register,
    sendResetPassword
};
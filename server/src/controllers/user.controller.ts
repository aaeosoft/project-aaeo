import { Request, Response } from "express";

const testRoute = async (req: Request, res: Response) => {
    res.json({
        "test": "ok"
    });
};

export default {
    testRoute,
};
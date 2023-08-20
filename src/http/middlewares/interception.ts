import { NextFunction, Request, Response } from "express";

export function error(err: HttpException, req: Request, res: Response, next: NextFunction): void
{
    const status: number = err.status;
    const message: string = err.message;

    res.status(status).json({
        status, message
    })
}
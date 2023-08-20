import { NextFunction, Request, Response } from "express";

export function intercepterError(err: HttpException, req: Request, res: Response, next: NextFunction): void
{
    const status: number = err.status ?? 500;
    const message: string = err.message ?? 'Internal Server Error';

    res.status(status).json({
        status, message
    })
}
import { NextFunction, Request, Response } from "express";
import EventUseCase from "../Domain/UseCase/EventUseCase";

export default class name {
    constructor(private eventUseCase: EventUseCase) {}

    async create(request: Request, response: Response, next: NextFunction){
        try {
            const event = await this.eventUseCase.create(request.body);
            return response.status(201).json({
                message: 'Event was created successfull',
                data: event
            })
        } catch (error) {
            next(error);
        }
    }
}
import { Event } from "../Entities/Event";
import { EventRepositoryContract } from "../RepositoryContracts/EventRepositoryContract";

export default class EventUseCase {
    constructor(private eventRepository: EventRepositoryContract) {}

    async create(eventData: Event){
        const event = await this.eventRepository.add(eventData);
    }
}
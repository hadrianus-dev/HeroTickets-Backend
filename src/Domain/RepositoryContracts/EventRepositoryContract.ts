import { Event } from "../Entities/Event";

interface EventRepositoryContract {
    add(event: Event): Promise<Event>;
}

export { EventRepositoryContract }
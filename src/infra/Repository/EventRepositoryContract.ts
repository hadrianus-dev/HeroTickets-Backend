import { Event } from "../../Domain/Entities/Event";

interface EventRepositoryContract {
    add(event: Event): Promise<Event>;
}

export { EventRepositoryContract }
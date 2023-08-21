import mongoose from "mongoose"
import { Event } from "../../Domain/Entities/Event";
import { EventRepositoryContract } from "./EventRepositoryContract";

const eventSchema = new mongoose.Schema({
    title: String,
    descrption: String,
    location: {
        latitude: String,
        longitude: String,
    },
    date: Date,
    cover: String,
    coupons: [String],
    participants: {
        type: Array,
        ref: 'User'
    },
    categories: [String],
    Price: {
        type: Array,

    },
    city: String,
});


const EventModel = mongoose.model('Event', eventSchema);

class EventRepositoryMongo implements EventRepositoryContract {
    async add(event: Event): Promise<Event> {
        const eventModel = new EventModel(event);
        await eventModel.save();
        return event;
    }
}

export { EventRepositoryMongo }
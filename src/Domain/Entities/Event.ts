import { User } from "./User";

class Event {
    constructor(
        public title: string, 
        public description: string,
        public date: Date,
        public cover: string,
        public coupons: string[],
        public participants: User[],
        public location: string[],
        public city: string,
    ){}
}

export { Event }

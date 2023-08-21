import { EmailValueObject } from "../ValueObjects/Email";

class User {
    constructor(
        public name: string,
        public email: EmailValueObject,
        public password: string,
    ) { /* this.email = new EmailValueObject(email).getValue(); */ }
}

export { User }
import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://ticketuser:esteeste12A@tickets.kdli3nm.mongodb.net/tickets');
        console.log('connection is successful');
               
    } catch (error) {
        console.log('====================================');
        console.log('database error:', error);
        console.log('====================================');
    }
}
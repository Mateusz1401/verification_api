import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  eventDate: Date,
});
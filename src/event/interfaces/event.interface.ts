import { Document, Model } from 'mongoose';

export interface IEvent extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly eventDate: Date;
}

export class Event extends Model<IEvent> {}
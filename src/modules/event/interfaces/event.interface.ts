import { Document } from 'mongoose';

export interface Event extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly eventDate: Date;
}
import { Module } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { Event } from '../event/interfaces/event.interface';

@Module({
  controllers: [EventController],
  providers: [
    EventService,
    {
      provide: getModelToken('Event'),
      useValue: Event,
    },
  ],
})

export class EventModuleSpec { }
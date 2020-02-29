import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventModuleSpec } from './eventSpec.module';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './interfaces/event.interface';

describe('event tests', () => {
  let eventController: EventController;
  let eventService: EventService;

  beforeAll(async () => {
    await Test.createTestingModule({
      imports: [EventModuleSpec]
    }).compile();

    // eventController = event.get<EventController>(EventController);
    // eventService = event.get<EventService>(EventService);

    eventService = new EventService(getModelToken('Event'));
    eventController = new EventController(eventService);
  });

  describe('save', () => {
    it('should save new event', async () => {
      // jest.spyOn(eventService, 'create').mockImplementation(() => result);
      // const response = await eventController.create(mockEvent);

      const mockEvent = new CreateEventDto({ firstName: 'Jan', lastName: 'Nowak', email: 'jan.nowak@gmail.com', eventDate: new Date() });
      const spy = jest.spyOn(eventService, 'create');
      const created = await eventController.create(mockEvent);

      expect(spy).toHaveBeenCalled();
      expect(created).toBe(true);

      spy.mockRestore();
    });
  });
});
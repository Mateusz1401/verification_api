import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import EventMockModel from '../../testMocks/eventModel.mock';

describe('EventService', () => {
  
  describe('Create Event', () => {
    let service: EventService;
    const mockEvent = new CreateEventDto({ firstName: 'Jan', lastName: 'Nowak', email: 'jan.nowak@gmail.com', eventDate: new Date() });

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          EventService,
          {
            provide: getModelToken('Event'),
            useValue: EventMockModel
          }
        ]
      }).compile();

      service = module.get<EventService>(EventService);
    });
    
    it('Method: Create should return a corrent object', async () => {
      const result = await service.create(mockEvent);
      expect(result).toEqual(mockEvent);
    });
  });
});
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsService } from './event.service';
import { Event } from './schemas/event.schema';
export declare class EventsController {
    private eventsService;
    constructor(eventsService: EventsService);
    getAll(): Promise<Event[]>;
    getOne(id: string): Promise<Event>;
    create(CreateEventDto: CreateEventDto): Promise<Event>;
    remove(id: string): Promise<Event>;
    update(updateEventDto: UpdateEventDto, id: string): Promise<Event>;
    updateEvent(toggleEventDone: UpdateEventDto, id: string): Promise<Event>;
}

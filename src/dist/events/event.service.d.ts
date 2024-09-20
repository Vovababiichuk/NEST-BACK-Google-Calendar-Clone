import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event, EventDocument } from './schemas/event.schema';
export declare class EventsService {
    private eventModel;
    constructor(eventModel: Model<EventDocument>);
    getAll(): Promise<Event[]>;
    getById(id: string): Promise<Event>;
    create(eventDto: CreateEventDto): Promise<Event>;
    remove(id: string): Promise<Event>;
    update(id: string, updateEventDto: UpdateEventDto): Promise<Event>;
    updateEvent(id: string, toggleEventDone: UpdateEventDto): Promise<Event>;
}

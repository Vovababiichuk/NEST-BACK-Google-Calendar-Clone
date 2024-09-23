import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) {}

  async getAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async getById(id: string): Promise<Event> {
    return this.eventModel.findById(id);
  }

  async create(eventDto: CreateEventDto): Promise<Event> {
    const newEvent = new this.eventModel(eventDto);
    console.log('BACKEND NewEvent', newEvent);
    return newEvent.save();
  }

  async remove(id: string): Promise<Event> {
    return this.eventModel.findByIdAndDelete(id);
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    return await this.eventModel.findByIdAndUpdate(id, updateEventDto, {
      new: true,
    });
  }

  async updateEvent(id: string, toggleEventDone: UpdateEventDto): Promise<Event> {
    return await this.eventModel.findByIdAndUpdate(id, toggleEventDone, {
      new: true,
    });
  }
}

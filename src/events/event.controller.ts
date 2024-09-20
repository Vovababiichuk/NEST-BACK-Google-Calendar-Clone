import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsService } from './event.service';
import { Event } from './schemas/event.schema';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  getAll(): Promise<Event[]> {
    return this.eventsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Event> {
    return this.eventsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'no-cache')
  create(@Body() CreateEventDto: CreateEventDto): Promise<Event> {
    return this.eventsService.create(CreateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Event> {
    return this.eventsService.remove(id);
  }

  @Put(':id')
  update(@Body() updateEventDto: UpdateEventDto, @Param('id') id: string): Promise<Event> {
    return this.eventsService.update(id, updateEventDto);
  }

  @Patch(':id')
  updateEvent(@Body() toggleEventDone: UpdateEventDto, @Param('id') id: string): Promise<Event> {
    return this.eventsService.updateEvent(id, toggleEventDone);
  }
}

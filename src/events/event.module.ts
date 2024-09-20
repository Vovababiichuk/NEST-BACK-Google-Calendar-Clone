import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsController } from './event.controller';
import { EventsService } from './event.service';
import { Event, EventSchema } from './schemas/event.schema';

@Module({
  providers: [EventsService],
  controllers: [EventsController],
  imports: [MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])],
})
export class EventsModule {}

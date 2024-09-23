import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Date, required: true })
  dateFrom: Date;

  @Prop({ type: Date, required: true })
  dateTo: Date;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  tag: string;

  @Prop({ required: false, default: '#c5bdf5' })
  color: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);

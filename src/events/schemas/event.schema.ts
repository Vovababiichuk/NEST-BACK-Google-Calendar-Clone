import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type EventDocument = Event & Document

@Schema()
export class Event {
	@Prop()
	title: string

	@Prop({ type: Date })
  dateFrom: Date;

  @Prop({ type: Date })
  dateTo: Date;

	@Prop()
	description: string

	@Prop()
	tag: string

	@Prop()
	color: string
}

export const EventSchema = SchemaFactory.createForClass(Event)
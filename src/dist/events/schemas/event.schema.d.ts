import { Document } from 'mongoose';
export type EventDocument = Event & Document;
export declare class Event {
    title: string;
    dateFrom: Date;
    dateTo: Date;
    description: string;
    tag: string;
    color: string;
}
export declare const EventSchema: import("mongoose").Schema<Event, import("mongoose").Model<Event, any, any, any, Document<unknown, any, Event> & Event & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Event, Document<unknown, {}, import("mongoose").FlatRecord<Event>> & import("mongoose").FlatRecord<Event> & {
    _id: import("mongoose").Types.ObjectId;
}>;

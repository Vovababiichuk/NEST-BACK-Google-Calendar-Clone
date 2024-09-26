export class UpdateEventDto {
  readonly title: string;
  readonly dateFrom: Date;
  readonly dateTo: Date;
  readonly description: string;
  readonly tag: string;
  readonly color: string;
  readonly done: boolean;
}

import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateExperienceDto {
  @Property({ required: true, type: 'string', maxLength: 100 })
  title!: string;

  @Property({ required: true, type: 'string', maxLength: 100 })
  company!: string;

  @Property({ required: true, type: 'date' })
  startDate!: Date;

  @Property({ required: true, type: 'date' })
  endDate!: Date;

  @Property({ type: 'object', target: IDDto, isArray: true, minimum: 1 })
  achievement?: IDDto[];

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}

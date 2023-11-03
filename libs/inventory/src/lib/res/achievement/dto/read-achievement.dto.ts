import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadAchievementDto extends BaseReadDto {
  @Property({ required: true, type: 'string' })
  description!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}

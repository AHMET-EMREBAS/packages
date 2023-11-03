import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateAchievementDto {
  @Property({ required: true, type: 'string' })
  description!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}

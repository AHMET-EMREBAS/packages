import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateSkillDto {
  @Property({ required: true, type: 'string' })
  skill!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}

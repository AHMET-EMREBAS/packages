import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadSkillDto extends BaseReadDto {
  @Property({ required: true, type: 'string' })
  skill!: string;

  @Property({ type: 'number', required: true, minimum: 1 })
  user!: number;
}

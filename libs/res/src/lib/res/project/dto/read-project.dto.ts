import { Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadProjectDto extends BaseReadDto {
  @Property({ type: 'string' })
  name!: string;
}

import { Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadDepartmentDto extends BaseReadDto {
  @Property({ type: 'string' })
  name!: string;
}

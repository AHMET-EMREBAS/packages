import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadDepartmentDto extends BaseReadDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  name!: string;
}

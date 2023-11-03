import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateDepartmentDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  name!: string;
}

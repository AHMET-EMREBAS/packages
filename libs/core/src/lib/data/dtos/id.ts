import { Dto, Property } from '../../decorators';

@Dto()
export class IDDto {
  @Property({ type: 'number', minimum: 1 })
  id: number;
}

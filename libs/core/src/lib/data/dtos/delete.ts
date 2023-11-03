import { Dto, Property } from '../../decorators';

@Dto()
export class DeleteDto {
  @Property({
    type: 'boolean',
    description: 'If it is set true, the entity is deleted forever.',
  })
  hard?: boolean;
}

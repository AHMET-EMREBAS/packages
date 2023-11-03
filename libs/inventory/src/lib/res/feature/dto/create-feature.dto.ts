import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateFeatureDto {
  @Property({ required: true, type: 'string', maxLength: 400 })
  feature!: string;
}

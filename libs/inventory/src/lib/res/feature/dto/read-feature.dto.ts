import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadFeatureDto extends BaseReadDto {
  @Property({ required: true, type: 'string', maxLength: 400 })
  feature!: string;
}

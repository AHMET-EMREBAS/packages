import { ObjectLiteral, UpdateResult } from 'typeorm';
import { Dto, Property } from '../../decorators';

@Dto()
export class UpdateResultDto implements UpdateResult {
  @Property({ type: 'number', description: 'Count of updated items.' })
  affected?: number;
  @Property({ type: 'object', target: {} }) generatedMaps: ObjectLiteral[];
  @Property({ type: 'string' }) raw: any;
}

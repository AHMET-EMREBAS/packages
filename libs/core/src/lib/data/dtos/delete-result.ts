import { ObjectLiteral, DeleteResult } from 'typeorm';
import { Dto, Property } from '../../decorators';

@Dto()
export class DeleteResultDto implements DeleteResult {
  @Property({ type: 'number', description: 'Count of deleted items.' })
  affected?: number;
  @Property({ type: 'object', target: {} }) generatedMaps: ObjectLiteral[];
  @Property({ type: 'string' }) raw: any;
}

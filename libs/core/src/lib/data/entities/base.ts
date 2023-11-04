import { Column } from '../../decorators';
import { TimestampEntity } from './timestamp';

export class BaseEntity extends TimestampEntity {
  @Column({ type: 'number' }) createdBy?: number;
  @Column({ type: 'boolean' }) active?: boolean;
  @Column({ type: 'string', format: 'uuid' }) uuid?: string;
  @Column({ type: 'string' }) uniqueField: string;
}

import { Column } from '../../decorators';
import { TimestampEntity } from './timestamp';

export class BaseEntity extends TimestampEntity {
  @Column({ type: 'number' }) createdBy?: number;
}

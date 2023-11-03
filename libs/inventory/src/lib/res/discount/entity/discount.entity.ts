import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Sku } from '../../sku';

@Entity()
export class Discount extends BaseEntity {
  @Column({ type: 'number', required: true })
  percent?: number;

  @Relation({ target: Sku, type: 'owner' })
  sku?: number;
}

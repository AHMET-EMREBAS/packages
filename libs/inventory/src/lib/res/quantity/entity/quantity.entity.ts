import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Sku } from '../../sku';
import { Store } from '../../store';

@Entity()
export class Quantity extends BaseEntity {
  @Column({ type: 'number' })
  quantity?: number;

  @Relation({ target: Sku, type: 'owner' })
  sku?: number;

  @Relation({ target: Store, type: 'owner' })
  store?: number;
}

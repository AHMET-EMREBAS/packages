import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Sku } from '../../sku';
import { PriceLevel } from '../../price-level';
import { Order } from '../../order';

@Entity()
export class OrderItem extends BaseEntity {
  @Column({ type: 'number', required: true })
  quantity?: number;

  @Relation({ target: Sku, type: 'owner' })
  sku?: number;

  @Relation({ target: PriceLevel, type: 'owner' })
  priceLevel?: number;

  @Relation({ target: Order, type: 'owner' })
  orderGroup?: number;
}

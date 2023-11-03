import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Sku } from '../../sku';
import { PriceLevel } from '../../price-level';

@Entity()
export class Price extends BaseEntity {
  @Column({ type: 'number', required: true })
  price?: number;

  @Column({ type: 'number', required: true })
  cost?: number;

  @Relation({ target: Sku, type: 'owner' })
  sku?: number;

  @Relation({ target: PriceLevel, type: 'owner' })
  priceLevel?: number;
}

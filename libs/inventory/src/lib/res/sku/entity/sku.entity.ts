import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Feature } from '../../feature';
import { Product } from '../../product';

@Entity()
export class Sku extends BaseEntity {
  @Column({ type: 'string', required: true, unique: true })
  barcode?: string;

  @Column({ type: 'string', required: true, unique: true })
  sku?: string;

  @Column({ type: 'string' })
  description?: string;

  @Relation({ target: Feature, type: 'subs' })
  features?: IDDto[];

  @Relation({ target: Product, type: 'owner' })
  product?: number;
}

import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Category } from '../../category';
import { Feature } from '../../feature';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'string', required: true })
  name?: string;

  @Column({ type: 'string' })
  description?: string;

  @Relation({ target: Category, type: 'sub' })
  category?: number;

  @Relation({ target: Feature, type: 'subs' })
  features?: IDDto[];


}

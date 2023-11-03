import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';

@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'string', required: true })
  name?: string;
}

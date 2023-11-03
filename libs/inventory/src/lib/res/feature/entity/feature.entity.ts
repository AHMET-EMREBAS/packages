import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';

@Entity()
export class Feature extends BaseEntity {
  @Column({ type: 'string', required: true })
  feature?: string;
}

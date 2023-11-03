import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';

@Entity()
export class Department extends BaseEntity {
  @Column({ type: 'string', required: true })
  name?: string;
}

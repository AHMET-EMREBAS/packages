import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';

@Entity()
export class Permission extends BaseEntity {
  @Column({ type: 'string', required: true, unique: true })
  permission?: string;
}

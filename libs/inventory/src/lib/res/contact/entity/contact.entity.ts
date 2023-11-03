import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Role } from '../../role';

@Entity()
export class Contact extends BaseEntity {
  @Column({ type: 'string', format: 'phone' })
  phone?: string;

  @Column({ type: 'string', format: 'url' })
  website?: string;

  @Relation({ target: Role, type: 'subs' })
  roles?: IDDto[];
}

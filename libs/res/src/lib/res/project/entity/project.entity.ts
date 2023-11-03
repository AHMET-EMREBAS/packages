import { BaseEntity, Column, Entity } from '../imports';

@Entity()
export class Project extends BaseEntity {
  @Column({ type: 'string', unique: true }) name!: string;
}

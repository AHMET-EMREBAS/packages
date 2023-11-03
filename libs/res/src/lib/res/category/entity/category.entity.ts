import { BaseEntity, Column, Entity } from '../imports';

@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'string', unique: true }) name!: string;
}

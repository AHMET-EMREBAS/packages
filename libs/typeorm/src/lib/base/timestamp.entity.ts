import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { IDEntity } from './id.entity';
import { Column } from '../property';

export class TimestampEntity extends IDEntity {
  @CreateDateColumn() createdAt!: Date;
  @UpdateDateColumn() updatedAt!: Date;
  @DeleteDateColumn() deletedAt!: Date;
  @Column({ type: 'string', format: 'uuid' }) uuid!: string;
}

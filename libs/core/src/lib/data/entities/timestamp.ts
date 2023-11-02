import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { ID } from './id';
import { Column } from '../../decorators';

export class TimestampEntity extends ID {
  @CreateDateColumn() createdAt!: Date;
  @UpdateDateColumn() updatedAt!: Date;
  @DeleteDateColumn() deletedAt!: Date;
  @Column({ type: 'string', format: 'uuid' }) uuid!: string;
}




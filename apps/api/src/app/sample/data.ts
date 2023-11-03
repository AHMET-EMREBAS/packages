import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @Column()
  name: string;
  
}

@Entity()
export class Customer {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
}

@Entity()
export class Contact {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @ManyToOne(() => Customer, (c) => c.id, { onDelete: 'CASCADE' })
  @JoinColumn()
  customer: number;
}

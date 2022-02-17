import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ponto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  client: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  phone: string;

  @Column({ type: 'date' })
  start_date: string;

  @Column({ type: 'date' })
  end_date: string;

  @Column()
  file: string;

  @Column({ default: true })
  isActive: boolean;
}
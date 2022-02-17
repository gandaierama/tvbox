import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Oferta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ponto: number;

  @Column()
  seconds: string;

  @Column()
  item: string;

  @Column()
  background: string;

  @Column()
  background_color: string;

  @Column()
  item_color: string;

  @Column()
  price_color: string;

  @Column()
  layout: string;

  @Column()
  letter: string;

  @Column()
  columns: string;

  @Column({ type: 'date' })
  start_date: string;

  @Column({ type: 'date' })
  end_date: string;


  @Column({ default: false })
  only_price: boolean;

  @Column({ default: true })
  isActive: boolean;
}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tabela {
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
  evens_color: string;

  @Column()
  odds_color: string;

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

  @Column()
  title_column1: string;

  @Column()
  title_column2: string;

  @Column()
  title_column3: string;


  @Column()
  item1_column1: string;

  @Column()
  item2_column1: string;

  @Column()
  item3_column1: string;

  @Column()
  item4_column1: string;

  @Column()
  item5_column1: string;

  @Column()
  item6_column1: string;

  @Column()
  item7_column1: string;

  @Column()
  item8_column1: string;

  @Column()
  item9_column1: string;

  @Column()
  item10_column1: string;

  @Column()
  item1_column2: string;

  @Column()
  item2_column2: string;

  @Column()
  item3_column2: string;

  @Column()
  item4_column2: string;

  @Column()
  item5_column2: string;

  @Column()
  item6_column2: string;

  @Column()
  item7_column2: string;

  @Column()
  item8_column2: string;

  @Column()
  item9_column2: string;

  @Column()
  item10_column2: string;

  @Column()
  item1_column3: string;

  @Column()
  item2_column3: string;

  @Column()
  item3_column3: string;

  @Column()
  item4_column3: string;

  @Column()
  item5_column3: string;

  @Column()
  item6_column3: string;

  @Column()
  item7_column3: string;

  @Column()
  item8_column3: string;

  @Column()
  item9_column3: string;

  @Column()
  item10_column3: string;

  @Column({ type: 'date' })
  start_date: string;

  @Column({ type: 'date' })
  end_date: string;


  @Column({ default: false })
  only_price: boolean;

  @Column({ default: true })
  isActive: boolean;
}
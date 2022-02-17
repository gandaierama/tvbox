import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_content: string;

  @Column()
  monday: boolean;

  @Column()
  tuesday: boolean;

  @Column()
  wednesday: boolean;

  @Column()
  thursday: boolean;

  @Column()
  friday: boolean;

  @Column()
  saturday: boolean;

  @Column()
  sunday: boolean;

  @Column({ default: true })
  isActive: boolean;
}
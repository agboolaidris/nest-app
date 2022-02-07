import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  country: string;
}

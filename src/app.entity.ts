import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Auth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  country: string;

  @Column()
  gender: string;

  @UpdateDateColumn()
  update_at: Date;

  @CreateDateColumn()
  created_at: Date;
}

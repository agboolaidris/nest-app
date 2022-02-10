import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Length, IsEmail } from 'class-validator';

@Entity()
export default class User extends BaseEntity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Length(5)
  @Column()
  username: string;

  @IsEmail()
  @Column()
  email: string;

  @Length(6)
  @Column()
  password: string;

  @Length(6)
  @Column()
  confirmpassword: string;

  @UpdateDateColumn()
  update_at: Date;

  @CreateDateColumn()
  created_at: Date;
}

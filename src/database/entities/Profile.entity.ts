import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @Column()
  dob: string;
}

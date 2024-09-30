import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'integer' })
  document: number;

  @Column({ type: 'varchar', length: 255 })
  adress: string;

  @Column({ type: 'varchar', length: 255 })
  adressEmail: string;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column({ type: 'varchar', length: 255 })
  departament: string;

  @Column({ type: 'varchar', length: 255 })
  neighborhood: string;

  @Column({ type: 'integer' })
  phone: number;
}

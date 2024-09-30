import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn,} from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  idProduct: number;

  @Column({ type: 'varchar', length: 255 })
  nameProduct: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column({ type: 'integer' })
  price: number;

  @Column({ type: 'integer' })
  size: number;

  @Column({ type: 'integer' })
  material: string;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;
}

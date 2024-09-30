import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn,} from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  idCategorie: number;

  @Column({ type: 'varchar', length: 255 })
  nameCategorie: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}

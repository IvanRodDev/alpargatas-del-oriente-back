import { Lines } from 'src/modules/lines/entities/lines.entity';
import { Products } from 'src/modules/products/entities/products.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, ManyToMany, JoinTable,} from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  idCategorie: number;

  @Column({ type: 'varchar', length: 255 })
  nameCategorie: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  //Relacion N:N Categories-Lines
  @ManyToMany(() => Lines, (lines) => lines.categories)
  @JoinTable({
    name: 'Categories_Lines',
    joinColumn: {
      name: 'Categorie_id',
      referencedColumnName: 'idCategorie',
    },
    inverseJoinColumn: {
      name: 'Line_id',
      referencedColumnName: 'idLine',
    },
  })
  lines: Lines[];
}

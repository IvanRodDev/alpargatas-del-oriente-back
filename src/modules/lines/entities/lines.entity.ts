import { Categories } from 'src/modules/categories/entities/categories.entity';
import { Products } from 'src/modules/products/entities/products.entity';
import { SubLines } from 'src/modules/sub-lines/entities/sub-lines.entity';
import { Column, PrimaryGeneratedColumn, OneToMany, Entity, ManyToOne, JoinColumn, ManyToMany, } from 'typeorm';

@Entity()
export class Lines {
  @PrimaryGeneratedColumn()
  idLine: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  //Relacion Lines-Categories
  @ManyToMany(() => Categories, (categories) => categories.lines)
  categories: Categories[];

  //Relacion 1:N lineas a Sublineas
  @OneToMany(() => SubLines, (subLines) => subLines.lines)
  subLines: SubLines[];

  //Relacion 1:N Lineas-Productos
  @OneToMany(() => Products, (products) => products.lines)
  products: Products[];
}

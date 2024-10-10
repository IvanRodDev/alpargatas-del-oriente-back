import { Lines } from 'src/modules/lines/entities/lines.entity';
import { Products } from 'src/modules/products/entities/products.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class SubLines {
  @PrimaryGeneratedColumn()
  idSubLine: number;

  @Column({ type: 'varchar', length: 255 })
  name: string

  @Column({ type: 'varchar', length: 255 })
  description: string

  @Column({ type: 'varchar', length: 255 })
  image: string

  @ManyToMany(()=> Lines,(lines)=>lines.subLines)
  lines: Lines[]

  @ManyToMany(()=>Products,(products)=>products.subLines)
  products: Products[]
}
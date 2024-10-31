import { Lines } from 'src/modules/lines/entities/lines.entity';
import { Products } from 'src/modules/products/entities/products.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

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

  @ManyToOne(()=> Lines,(lines)=>lines.subLines)
  lines: Lines[]

  @OneToMany(()=>Products,(products)=>products.subLines)
  products: Products[]
}
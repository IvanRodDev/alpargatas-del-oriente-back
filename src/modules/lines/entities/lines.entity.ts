import { Categories } from 'src/modules/categories/entities/categories.entity';
import { Products } from 'src/modules/products/entities/products.entity';
import { SubLines } from 'src/modules/sub-lines/entities/sub-lines.entity';
import {  Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, Entity, JoinTable, } from 'typeorm';

@Entity()
export class Lines {
  @PrimaryGeneratedColumn()
  idLine: number;

  @Column({ type: 'varchar', length: 255 })
  name: string

  @Column({ type: 'varchar', length: 255 })
  description: string

  @Column({ type: 'varchar', length: 255 })
  image: string

  //Relacion N:N lineas a Sublineas
  @ManyToMany(()=> SubLines,(subLines)=>subLines.lines)
  @JoinTable({
    name:"Lines_SubLines",
    joinColumn:{
        name:"line_id",
        referencedColumnName:"idLine"
    },
    inverseJoinColumn:{
        name:"subLines_id",
        referencedColumnName:"idSubLine"
    }
})
  subLines: SubLines[]

  //Relacion N:N 
  @ManyToMany(()=>Products,(products)=>products.lines)
  products: Products[]

  //Relacion N:N Lines-Products
  @ManyToMany(()=>Categories,(categories)=>categories.lines)
  categories: Categories[]
}

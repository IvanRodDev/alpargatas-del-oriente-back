import { Lines } from 'src/modules/lines/entities/lines.entity';
import { Orders } from 'src/modules/orders/entities/orders.entity';
import { SubLines } from 'src/modules/sub-lines/entities/sub-lines.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, ManyToMany, JoinTable,} from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  idProduct: number;

  @Column({ type: 'integer' })
  code: number;

  @Column({ type: 'varchar', length: 255 })
  nameProduct: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column({ type: 'integer' })
  price: number;

  @Column({ type: 'integer' })
  size: number;

  @Column({ type: 'integer' })
  stock: number;

  @Column({ type: 'integer' })
  material: string;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @ManyToOne(() => Orders, (orders) => orders.products)
  orders: Orders;

  //Relacion N:N products-lines
  @ManyToMany(() => Lines, (lines) => lines.products)
  @JoinTable({
    name: 'Products_Lines',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'idProduct',
    },
    inverseJoinColumn: {
      name: 'line_id',
      referencedColumnName: 'idLine',
    },
  })
  lines: Lines[];

  //Relacion N:N products-SubLines
  @ManyToMany(() => SubLines, (subLines) => subLines.products)
  @JoinTable({
    name: 'Products_SubLines',
    joinColumn: {
      name: 'product_id',
      referencedColumnName:"idProduct"
    },
    inverseJoinColumn: {
      name: 'SubLine_id',
      referencedColumnName:"idSubLine"
    },
  })
  subLines: SubLines[];
}

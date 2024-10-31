import { Lines } from 'src/modules/lines/entities/lines.entity';
import { Orders } from 'src/modules/orders/entities/orders.entity';
import { SubLines } from 'src/modules/sub-lines/entities/sub-lines.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn} from 'typeorm';

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

  //Relacion products-orders
  @ManyToOne(() => Orders, (orders) => orders.products)
  @JoinColumn({ name: 'ordersId' })
  orders: Orders;

  //Relacion products-lines
  @ManyToOne(() => Lines, (lines) => lines.products)
  @JoinColumn({ name: 'lineId' })
  lines: Lines[];

  //Relacion products-SubLines
  @ManyToOne(() => SubLines, (subLines) => subLines.products)
  @JoinColumn({ name: 'subLineId' })
  subLines: SubLines[];
}

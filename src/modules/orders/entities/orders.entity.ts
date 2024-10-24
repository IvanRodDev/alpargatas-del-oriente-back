import { Products } from 'src/modules/products/entities/products.entity';
import { ShopCart } from 'src/modules/shop-cart/entities/shop-cart.entity';
import { Column, Entity, PrimaryGeneratedColumn,OneToOne, OneToMany } from 'typeorm';


@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  idOrder: number;

  @Column({ type: 'integer' })
  code: number;

  @Column({ type: 'integer'})
  totalAmount: number;

  @OneToOne(() => ShopCart, (shopcart) => shopcart.orders)
  shopCart: ShopCart;

  @OneToMany(() => Products, (products) => products.orders)
  products: Products[];
}
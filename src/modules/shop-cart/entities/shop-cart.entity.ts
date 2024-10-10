import { Orders } from "src/modules/orders/entities/orders.entity";
import { Users } from "src/modules/users/entities/users.entity";
import { Column, JoinColumn, PrimaryGeneratedColumn, Entity, OneToOne } from "typeorm";

@Entity()
export class ShopCart {
  @PrimaryGeneratedColumn()
  idShopCart: number;

  @Column({ type: 'integer' })
  code: number;

  @OneToOne(() => Orders, (orders) => orders.shopCart)
  @JoinColumn() // decorador para la llave foranea
  orders: Orders;

  @OneToOne(() => Users, (users) => users.shopCart)
  users: Users;
}
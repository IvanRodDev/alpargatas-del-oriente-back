import { ShopCart } from 'src/modules/shop-cart/entities/shop-cart.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn,} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Column({ type: 'integer' })
  document: number;

  @Column({ type: 'varchar', length: 255 })
  adress: string;

  @Column({ type: 'varchar', length: 255 })
  adressEmail: string;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column({ type: 'varchar', length: 255 })
  departament: string;

  @Column({ type: 'varchar', length: 255 })
  neighborhood: string;

  @Column({ type: 'integer' })
  phone: number;

  @OneToOne(() => ShopCart, (shopCart) => shopCart.users)
  @JoinColumn()
  shopCart: ShopCart;
}

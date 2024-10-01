import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Orders{
    @PrimaryGeneratedColumn()
    idOrder: number

    @Column({ type: 'varchar', length: 255 })
    totalAmount: number;


}
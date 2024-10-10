import { Module } from '@nestjs/common';
import { ShopCartController } from './controllers/shop-cart.controller';
import { ShopCartService } from './services/shop-cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopCart } from './entities/shop-cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShopCart])],
  controllers: [ShopCartController],
  providers: [ShopCartService]
})
export class ShopCartModule {}

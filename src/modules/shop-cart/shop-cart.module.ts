import { Module } from '@nestjs/common';
import { ShopCartController } from './controllers/shop-cart.controller';
import { ShopCartService } from './services/shop-cart.service';

@Module({
  controllers: [ShopCartController],
  providers: [ShopCartService]
})
export class ShopCartModule {}

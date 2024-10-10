import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ShopCartModule } from './modules/shop-cart/shop-cart.module';
import { LinesModule } from './modules/lines/lines.module';
import { SubLinesModule } from './modules/sub-lines/sub-lines.module';

@Module({
  imports: [
    ProductsModule,
    DatabaseModule,
    UsersModule,
    CategoriesModule,
    OrdersModule,
    ShopCartModule,
    LinesModule,
    SubLinesModule,
  ],
  providers: [],
})
export class AppModule {}

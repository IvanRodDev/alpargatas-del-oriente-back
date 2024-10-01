import { Module } from '@nestjs/common';
import { OrderDetailsService } from './services/order-details.service';
import { OrderDetailsController } from './controllers/order-details.controller';
import { Orders } from '../orders/entities/orders.entity';

@Module({
  providers: [OrderDetailsService],
  controllers: [OrderDetailsController],
})
export class OrderDetailsModule {}

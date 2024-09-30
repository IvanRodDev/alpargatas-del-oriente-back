import { Module } from '@nestjs/common';
import { OrderDetailsService } from './services/order-details.service';
import { OrderDetailsController } from './controllers/order-details.controller';

@Module({
  providers: [OrderDetailsService],
  controllers: [OrderDetailsController]
})
export class OrderDetailsModule {}

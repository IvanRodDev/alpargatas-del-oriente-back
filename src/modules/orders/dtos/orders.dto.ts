import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrdersDto {
  @IsNumber()
  @IsNotEmpty()
  readonly code: number;

  @IsNumber()
  @IsNotEmpty()
  readonly totalAmount: number;
}

import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOrdersDto{
  @IsString()
  @IsNotEmpty()
  readonly code: number;

  @IsString()
  @IsNotEmpty()
  readonly totalAmount: number;
}

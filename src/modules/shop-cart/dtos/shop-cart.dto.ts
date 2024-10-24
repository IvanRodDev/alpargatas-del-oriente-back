import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShopCartDto {
  @IsNumber()
  @IsNotEmpty()
  readonly code: number;
}

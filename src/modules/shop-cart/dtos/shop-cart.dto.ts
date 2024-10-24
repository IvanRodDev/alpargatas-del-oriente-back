import { IsString, IsNotEmpty } from 'class-validator';

export class CreateShopCartDto {
  @IsString()
  @IsNotEmpty()
  readonly code: number;

}

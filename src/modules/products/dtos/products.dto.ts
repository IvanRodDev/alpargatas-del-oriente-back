import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProductsDto {
  @IsString()
  @IsNotEmpty()
  readonly code: number;

  @IsString()
  @IsNotEmpty()
  readonly nameProduct: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly image: string;

  @IsString()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly size: number;

  @IsString()
  @IsNotEmpty()
  readonly stock: number;

  @IsString()
  @IsNotEmpty()
  readonly createdAt: string;
}

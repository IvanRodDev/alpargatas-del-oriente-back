import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateProductsDto {
  
  @IsNumber()
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

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly size: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsString()
  @IsNotEmpty()
  readonly createdAt: string;

  @IsNumber()
  @IsOptional()
  readonly lineId: number;

  @IsNumber()
  @IsOptional()
  readonly subLineId?: number;
}

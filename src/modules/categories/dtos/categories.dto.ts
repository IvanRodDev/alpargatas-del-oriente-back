import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoriesDto {

  @IsString()
  @IsNotEmpty()
  readonly nameCategorie: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

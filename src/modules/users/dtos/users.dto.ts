import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSubLinesDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  readonly document: number;

  @IsString()
  @IsNotEmpty()
  readonly adress: string;

  @IsString()
  @IsNotEmpty()
  readonly adressEmail: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsString()
  @IsNotEmpty()
  readonly departament: string;

  @IsString()
  @IsNotEmpty()
  readonly neighborhood: string;

  @IsNumber()
  @IsNotEmpty()
  readonly phone: number;
}

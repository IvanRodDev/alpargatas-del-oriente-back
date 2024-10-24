import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLinesDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly image: string;
}

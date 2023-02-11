import { IsNumber, IsString } from 'class-validator';

export class InputValuesDto {
  @IsString()
  from: string;

  @IsString()
  to: string;

  @IsNumber()
  value: number;
}

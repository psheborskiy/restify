import { IsNumber, IsPositive, IsString, Max } from "class-validator";

export class CreateCarDto {
  @IsString()
  name: string;
  
  @IsString()
  version: string;

  @IsString()
  marka: string;

  @IsString()
  model: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  @Max(3)
  currencyId: number;
}

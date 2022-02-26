import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";


export class City {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  code: string;
}


export class CreateItemDto {
  @ApiProperty()
  name: string | null;

  @ApiProperty()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  breed: string;

  @ApiProperty()
  @IsNotEmpty()
  city: City;
}

import { ApiProperty } from '@nestjs/swagger';

export class Item {
  @ApiProperty()
  name: string
}

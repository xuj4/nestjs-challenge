import { ApiProperty } from '@nestjs/swagger';

export class Project {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

import { IsArray, IsDate, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsDate()
  deadline: Date;

  @IsArray()
  options: { option: string }[];
}

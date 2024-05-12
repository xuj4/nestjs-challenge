import {
  IsArray,
  IsBoolean,
  IsDate,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsDate()
  deadline: Date;

  @IsArray()
  options: string[];

  @IsNumber()
  primaryAssigneeId: number;
}

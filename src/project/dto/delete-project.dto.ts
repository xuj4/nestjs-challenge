import { IsNumber } from 'class-validator';

export class DeleteProject {
  @IsNumber()
  id: number;
}

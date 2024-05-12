import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'primary_assignee_id' })
  primaryAssigneeId: number;

  @Column()
  name: string;

  @Column()
  deadline: Date;

  @Column('jsonb', { nullable: true })
  options: string[];

  @Column()
  isActive: boolean;
}

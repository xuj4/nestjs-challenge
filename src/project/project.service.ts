import { Injectable } from '@nestjs/common';
import { Project } from './entity/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly ProjectRepository: Repository<Project>,
  ) {}

  async createProject(projectDto: CreateProjectDto): Promise<Project> {
    const project = this.ProjectRepository.create({
      name: projectDto.name,
      deadline: projectDto.deadline,
    });
    return this.ProjectRepository.save(project);
  }

  async getAllProjects(): Promise<Project[]> {
    return this.ProjectRepository.find();
  }

  // getAllProjects(): Project[] {
  //   const project: Project = {
  //     id: 1,
  //     name: 'test project',
  //     deadline: new Date(),
  //     options: null,
  //   };
  //   return [project];
  // }
}

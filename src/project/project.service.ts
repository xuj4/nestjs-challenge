import { Injectable } from '@nestjs/common';
import { Project } from './entity/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { DeleteProject } from './dto/delete-project.dto';

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
      isActive: true,
      primaryAssigneeId: projectDto.primaryAssigneeId,
      options: projectDto.options,
    });
    return this.ProjectRepository.save(project);
  }

  public async deleteProject(project: DeleteProject): Promise<Project> {
    const projectToDelete = await this.ProjectRepository.findOneBy({
      id: project.id,
    });
    projectToDelete.isActive = false;
    await this.ProjectRepository.save(projectToDelete);
    return this.ProjectRepository.findOneBy({ id: project.id });
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

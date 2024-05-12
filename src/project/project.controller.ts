import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './entity/project.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateProjectDto } from './dto/create-project.dto';

@ApiTags('project')
@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  async getAllProjects(): Promise<Project[]> {
    return await this.projectService.getAllProjects();
  }

  @Post()
  async createProject(@Body() project: CreateProjectDto): Promise<Project> {
    return await this.projectService.createProject(project);
  }
}

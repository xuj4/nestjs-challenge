import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './entity/project.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateProjectDto } from './dto/create-project.dto';
import { DeleteProject } from './dto/delete-project.dto';

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

  @Delete()
  async deleteProject(@Body() project: DeleteProject): Promise<Project> {
    return await this.projectService.deleteProject(project);
  }
}

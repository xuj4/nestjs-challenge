import { Injectable } from '@nestjs/common';
import { Project } from './entity/project.entity';

@Injectable()
export class ProjectService {
  getAllProjects(): Project[] {
    const project: Project = {
      id: 1,
      name: 'test project',
    };
    return [project];
  }
}

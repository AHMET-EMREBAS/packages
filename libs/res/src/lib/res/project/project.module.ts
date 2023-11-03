import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project, ProjectView } from './entity';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectViewService } from './project-view.service';
import { ProjectViewController } from './project-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectView])],
  controllers: [ProjectController, ProjectViewController],
  providers: [ProjectService, ProjectViewService],
})
export class ProjectModule {}

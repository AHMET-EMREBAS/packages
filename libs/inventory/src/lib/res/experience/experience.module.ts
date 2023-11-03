import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience, ExperienceView } from './entity';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';
import { ExperienceViewService } from './experience-view.service';
import { ExperienceViewController } from './experience-view.controller';
import { Achievement } from '../achievement';
import { User } from '../user';

@Module({
  imports: [
    TypeOrmModule.forFeature([Experience, ExperienceView, Achievement, User]),
  ],
  controllers: [ExperienceController, ExperienceViewController],
  providers: [ExperienceService, ExperienceViewService],
})
export class ExperienceModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill, SkillView } from './entity';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { SkillViewService } from './skill-view.service';
import { SkillViewController } from './skill-view.controller';
import { User } from '../user';

@Module({
  imports: [TypeOrmModule.forFeature([Skill, SkillView, User])],
  controllers: [SkillController, SkillViewController],
  providers: [SkillService, SkillViewService],
})
export class SkillModule {}

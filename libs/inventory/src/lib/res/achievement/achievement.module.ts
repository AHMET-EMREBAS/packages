import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Achievement, AchievementView } from './entity';
import { AchievementController } from './achievement.controller';
import { AchievementService } from './achievement.service';
import { AchievementViewService } from './achievement-view.service';
import { AchievementViewController } from './achievement-view.controller';
import { User } from '../user';

@Module({
  imports: [TypeOrmModule.forFeature([Achievement, AchievementView, User])],
  controllers: [AchievementController, AchievementViewController],
  providers: [AchievementService, AchievementViewService],
})
export class AchievementModule {}

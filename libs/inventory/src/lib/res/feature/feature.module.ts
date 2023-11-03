import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feature, FeatureView } from './entity';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';
import { FeatureViewService } from './feature-view.service';
import { FeatureViewController } from './feature-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Feature, FeatureView])],
  controllers: [FeatureController, FeatureViewController],
  providers: [FeatureService, FeatureViewService],
})
export class FeatureModule {}

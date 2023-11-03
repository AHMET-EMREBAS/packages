import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceLevel, PriceLevelView } from './entity';
import { PriceLevelController } from './price-level.controller';
import { PriceLevelService } from './price-level.service';
import { PriceLevelViewService } from './price-level-view.service';
import { PriceLevelViewController } from './price-level-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PriceLevel, PriceLevelView])],
  controllers: [PriceLevelController, PriceLevelViewController],
  providers: [PriceLevelService, PriceLevelViewService],
})
export class PriceLevelModule {}

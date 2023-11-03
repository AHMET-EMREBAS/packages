import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialMedia, SocialMediaView } from './entity';
import { SocialMediaController } from './social-media.controller';
import { SocialMediaService } from './social-media.service';
import { SocialMediaViewService } from './social-media-view.service';
import { SocialMediaViewController } from './social-media-view.controller';
import { User } from '../user';

@Module({
  imports: [TypeOrmModule.forFeature([SocialMedia, SocialMediaView, User])],
  controllers: [SocialMediaController, SocialMediaViewController],
  providers: [SocialMediaService, SocialMediaViewService],
})
export class SocialMediaModule {}

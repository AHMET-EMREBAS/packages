import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileImage, ProfileImageView } from './entity';
import { ProfileImageController } from './profile-image.controller';
import { ProfileImageService } from './profile-image.service';
import { ProfileImageViewService } from './profile-image-view.service';
import { ProfileImageViewController } from './profile-image-view.controller';
import { User } from '../user';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileImage, ProfileImageView, User])],
  controllers: [ProfileImageController, ProfileImageViewController],
  providers: [ProfileImageService, ProfileImageViewService],
})
export class ProfileImageModule {}

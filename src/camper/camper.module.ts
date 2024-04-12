import { Module } from '@nestjs/common';
import { CamperController } from './camper.controller';
import { CamperService } from './camper.service';

@Module({
  controllers: [CamperController],
  providers: [CamperService]
})
export class CamperModule {}

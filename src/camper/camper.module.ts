import { Module } from '@nestjs/common';
import { CamperController } from './camper.controller';
import { CamperService } from './camper.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Camper, CamperSchema } from '../schemas/camper.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Camper.name, schema: CamperSchema }]),
  ],
  controllers: [CamperController],
  providers: [CamperService],
})
export class CamperModule {}

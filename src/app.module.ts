import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CamperModule } from './camper/camper.module';

@Module({
  imports: [CamperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CamperModule } from './camper/camper.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CamperModule,
    MongooseModule.forRoot(
      'mongodb+srv://degtyarevvladimirr:AiiSQHU3b5aKqhNH@camper.5l69e05.mongodb.net/camper?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

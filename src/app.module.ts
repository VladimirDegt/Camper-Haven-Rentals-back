import { Module } from '@nestjs/common';
import { CamperModule } from './camper/camper.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    CamperModule,
    MongooseModule.forRoot(
      'mongodb+srv://degtyarevvladimirr:AiiSQHU3b5aKqhNH@camper.5l69e05.mongodb.net/camper?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

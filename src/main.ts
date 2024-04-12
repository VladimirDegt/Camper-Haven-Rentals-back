import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
config();

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Backend Camper rentals API')
    .setDescription('Documentations REST API')
    .setVersion('1.0.0')
    .addTag('Volodymyr Dehtiarev')
    .build();
  app.enableCors();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(PORT || 3000, () =>
    console.log(`Server started on port = ${PORT}`),
  );
}
bootstrap();

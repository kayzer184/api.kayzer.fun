import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const СonfigService = app.get(ConfigService);
  
  const config = new DocumentBuilder()
    .setTitle('Kayzer API')
    .setDescription('The Kayzer API description')
    .setVersion('0.1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(СonfigService.get<number>('PORT')!);
}
bootstrap();
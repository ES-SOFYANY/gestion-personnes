import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
        .setTitle('Gestion des personnes')
        .setDescription('The persons API description')
        .setVersion('1.0')
        .addTag('persons')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    app.useGlobalPipes(new ValidationPipe());
    SwaggerModule.setup('apiDoc', app, document);

    await app.listen(5000);
}

bootstrap();

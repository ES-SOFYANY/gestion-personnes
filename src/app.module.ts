import { Module } from '@nestjs/common';
import { PersonsModule } from './persons/persons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './persons/personEntity';

@Module({
  imports: [PersonsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'persons',
    entities: [PersonEntity],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}

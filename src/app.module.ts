import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalRepository } from './animal.repository';
import { CatService } from './cat.service';
import { DogService } from './dog.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AnimalRepository, CatService, DogService],
})
export class AppModule {}

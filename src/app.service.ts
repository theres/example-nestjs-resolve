import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { AnimalRepository } from './animal.repository';
import { CatService } from './cat.service';
import { DogService } from './dog.service';

@Injectable()
export class AppService {
  constructor(private moduleRef: ModuleRef, private repository: AnimalRepository){}

  async getHello(group: string): Promise<string> {
    const animals = this.repository.getByGroup(group);
    const animalsPromise = animals.map(async (animal) => {
      switch(animal.type){
        case 'cat': {
          const service = await this.moduleRef.resolve(CatService);
          service.entity = animal;
          return service;
        };
        case 'dog': {
          const service = await this.moduleRef.resolve(DogService);
          service.entity = animal;
          return service;
        }
      }
    });
    const services = await Promise.all(animalsPromise);
    return services.map(service => service.getHello()).join(', ');
  }
}

import { Injectable, Scope } from '@nestjs/common';
import { Animal } from './anima.entity';

@Injectable({scope: Scope.TRANSIENT})
export class DogService {
  entity: Animal | undefined;

  constructor(/** a set of injectable services */){}

  // Here we have planty of legacy code that already exists. 
  // This code is stateful and it is quite hard and super time consuming to rewrite it now in a way that
  // We can make DogService stateless and passing the entity through the parameter of each method that we expose.
  getHello(): string {
    if(!this.entity) {
      throw new Error("Oops, you forgot to inject the entity!")
    }
    return `Dog ${this.entity.name}: Hello!`;
  }
}

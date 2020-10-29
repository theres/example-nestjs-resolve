
import { Animal } from './anima.entity';
import { Injectable } from '@nestjs/common';

// just for sake of simplicity, normally it would come from DB or API
const data = [
    new Animal('g1', 'cat', 'Cat1'),
    new Animal('g1', 'cat', 'Cat2'),
    new Animal('g1', 'cat', 'Cat3'),
    new Animal('g2', 'cat', 'Cat4'),
    new Animal('g2', 'dog', 'Dog1'),
    new Animal('g2', 'dog', 'Dog2'),
    new Animal('g2', 'dog', 'Dog3'),
    new Animal('g1', 'dog', 'Dog4'),
]

@Injectable()
export class AnimalRepository {
    public getByGroup(group: string): Animal[]{
        return data.filter(d => d.group === group);
    }
}
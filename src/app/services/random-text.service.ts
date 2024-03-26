import { Injectable } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
import { IGeneratorOptions } from 'lorem-ipsum/types/src/lib/generator';

@Injectable({
  providedIn: 'root'
})
export class RandomTextService {
  private static readonly LOREM_CONFIGURATION: IGeneratorOptions = {
    wordsPerSentence: {
      max: 10,
      min: 4
    }
  }

  private lorem: LoremIpsum;

  constructor() {
    this.lorem = new LoremIpsum(RandomTextService.LOREM_CONFIGURATION);
  }

  generateRandomSentence(): string {
    return this.lorem.generateSentences(1);
  }

}
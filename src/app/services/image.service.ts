import { Injectable, OnInit } from '@angular/core';
import { PicsumImage } from '../model/PicsumImage';
import { RandomTextService } from './random-text.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private numImages: number = 4000;

  constructor(
    private serviceText: RandomTextService
  ) { }

  generatePicsumImages(): PicsumImage[] {
    let images: PicsumImage[] = [];
    for (let idNumber = 1; idNumber <= this.numImages; idNumber++) {
      const imgObject: PicsumImage = {
        id: idNumber,
        photo: `https://picsum.photos/id/${idNumber}/500/500`,
        text: this.serviceText.generateRandomSentence()
      };

      images.push(imgObject);
    }

    return images;
  }


}

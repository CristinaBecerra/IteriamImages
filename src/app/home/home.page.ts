import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { PicsumImage } from '../model/PicsumImage';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private allPicsumImages: PicsumImage[]
  displayedImages: PicsumImage[]
  private imagesPerScroll: number = 25;

  searchText: string = ""

  constructor(
    private imageService: ImageService
  ) {
    this.allPicsumImages = [];
    this.displayedImages = [];
  }

  ngOnInit() {
    this.allPicsumImages = this.imageService.generatePicsumImages();
    this.generateNextImages();
  }

  generateNextImages() {
    const begin = this.displayedImages.length;
    const until = begin + this.imagesPerScroll;

    const filteredImages = this.allPicsumImages.filter(it => this.shouldFilterImage(it));

    for (let i = begin; i < until && i < filteredImages.length; i++) {
      this.displayedImages.push(filteredImages[i]);
    }
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateNextImages();
    setTimeout(() => ev.target.complete(), 500);
  }

  shouldFilterImage(image: PicsumImage): boolean {
    const isSameId = image.id.toString().includes(this.searchText);
    const containsText = image.text.toLowerCase().includes(this.searchText.toLowerCase());

    return containsText || isSameId;
  }

  triggerFilterImages() {
    this.displayedImages = [];
    this.generateNextImages();
  }
}

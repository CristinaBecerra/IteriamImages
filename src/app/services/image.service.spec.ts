import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';
import { RandomTextService } from './random-text.service';

describe('ImageServiceService', () => {
  let service: ImageService;
  let randomTextService: RandomTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    randomTextService = TestBed.inject(RandomTextService);
    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate 4000 images', () => {
    const images = service.generatePicsumImages();

    expect(images.length).toBe(4000);
  });

  it('should not contain any image with id 0', () => {
    const images = service.generatePicsumImages();

    const imagesWithId0 = images.filter(it => it.id == 0).length;
    expect(imagesWithId0).toBe(0);
  });

  it('should contain one image with id 1', () => {
    const images = service.generatePicsumImages();

    const imagesWithId1 = images.filter(it => it.id == 1).length;
    expect(imagesWithId1).toBe(1);
  });

  it('should contain one image with id 4000', () => {
    const images = service.generatePicsumImages();

    const imagesWithId4000 = images.filter(it => it.id == 4000).length;
    expect(imagesWithId4000).toBe(1);
  });

  it('should not contain any image with id 4001', () => {
    const images = service.generatePicsumImages();

    const imagesWithId4000 = images.filter(it => it.id == 4001).length;
    expect(imagesWithId4000).toBe(0);
  });

  it('should inject the id in the photo field', () => {
    const images = service.generatePicsumImages();

    const image = images[22];
    expect(image.id).toBe(23);
    expect(image.photo).toBe(`https://picsum.photos/id/23/500/500`);
    expect(image.text).not.toBeNull();
  });

  it('should have called random-text service 4000 times', () => {
    spyOn(randomTextService, "generateRandomSentence");

    service.generatePicsumImages();

    expect(randomTextService.generateRandomSentence).toHaveBeenCalledTimes(4000);
  });

});

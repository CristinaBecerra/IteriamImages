import { TestBed } from '@angular/core/testing';

import { RandomTextService } from './random-text.service';

describe('RandomTextServiceService', () => {
  let service: RandomTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a non-null/undefined string', () => {
    const output = service.generateRandomSentence();

    expect(output).not.toBeNull();
    expect(output).not.toBeUndefined();
  });

  it('should return between 4 and 10 words', () => {
    // As the text generated is random
    // if we only run this test once we could get a false positive
    for (let i = 0; i < 100; i++) {
      const output = service.generateRandomSentence();

      const wordsGenerated: number = output.split(" ").length;
      expect(wordsGenerated).toBeGreaterThanOrEqual(4);
      expect(wordsGenerated).toBeLessThanOrEqual(10);
    }
  });

  it('should end in a dot', () => {
    // As the text generated is random
    // if we only run this test once we could get a false positive
    for (let i = 0; i < 100; i++) {
      const output = service.generateRandomSentence();

      const lastChar = output.charAt(output.length - 1);
      expect(lastChar).toBe(".");
    }
  });

  it('should not contain numbers', () => {
    // As the text generated is random
    // if we only run this test once we could get a false positive
    for (let i = 0; i < 100; i++) {
      const output = service.generateRandomSentence();

      const containsANumber = /\d/.test(output);
      expect(containsANumber).toBeFalsy();
    }
  });

  it('should contain at least one uppercase char', () => {
    // As the text generated is random
    // if we only run this test once we could get a false positive
    for (let i = 0; i < 100; i++) {
      const output = service.generateRandomSentence();

      const containsUppercase = /[A-Z]/.test(output);
      expect(containsUppercase).toBeTruthy();
    }
  });

  it('should contain at least one lowercase char', () => {
    // As the text generated is random
    // if we only run this test once we could get a false positive
    for (let i = 0; i < 100; i++) {
      const output = service.generateRandomSentence();

      const containsLowercase = /[a-z]/.test(output);
      expect(containsLowercase).toBeTruthy();
    }
  });
});

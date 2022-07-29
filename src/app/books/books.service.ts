import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Scribble Stones',
        author: 'Diane Alber',
        image:
          'https://m.media-amazon.com/images/P/B07PN7RP7G.01._SCLZZZZZZZ_SX500_.jpg',
        price: 700,
      },
      {
        name: 'TinkerLab Art Starts: 52 Projects for Open-Ended Exploration Paperback',
        author: 'Rachelle Doorley',
        image:
          'https://m.media-amazon.com/images/P/1611806682.01._SCLZZZZZZZ_SX500_.jpg',
        price: 800,
      },
    ];
  }
}

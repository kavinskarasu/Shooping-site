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
        name: 'TinkerLab Art Starts',
        author: 'Rachelle Doorley',
        image:
          'https://m.media-amazon.com/images/P/1611806682.01._SCLZZZZZZZ_SX500_.jpg',
        price: 800,
      },
      {
        name: 'Sesame Street ',
        author: 'Rachelle Doorley',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51i0ZCnA+lL._SY498_BO1,204,203,200_.jpg',
        price: 800,
      },
      {
        name: ' Art Starts',
        author: 'Rachelle Doorley',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL210_SR195,210_.jpg',
        price: 800,
      },
      {
        name: ' Starts',
        author: 'Rachelle Doorley',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL210_SR195,210_.jpg',
        price: 800,
      },
      {
        name: ' Atomic Habits',
        author: 'Rachelle Doorley',
        image:
          'https://m.media-amazon.com/images/P/0671027034.01._SCLZZZZZZZ_SX500_.jpg',
        price: 800,
      },
    ];
  }
}

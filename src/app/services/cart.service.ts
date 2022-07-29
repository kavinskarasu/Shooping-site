import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Array<Book> = [];

  constructor() {}
  add(book: Book) {
    this.cart.push(book);
  }
  get() {
    return this.cart;
  }
  remove(book: Book) {
    this.cart.forEach((value, index) => {
      if (value == book) this.cart.splice(index, 1);
    });
  }
}

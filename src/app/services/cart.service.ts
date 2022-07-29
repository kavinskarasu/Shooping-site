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
}

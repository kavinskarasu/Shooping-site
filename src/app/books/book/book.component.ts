import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/Book';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  isInCart: Boolean = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.isInCart = true;
    console.log(this.book);
    this.cartService.add(this.book);
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}

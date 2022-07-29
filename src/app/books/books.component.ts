import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  isShowing: boolean = true;
  name3: string = '';
  cart: Book[] = [];
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
  //event binding
  // eventhandler() {
  //   this.isShowing = true;
  // }

  /*
it is achived by two way binding 
  */

  // name3: string = '';

  // handleInput(event: any) {
  //   this.name3 = event.target.value;
  // }
  toggleBooks() {
    //if isShowing is true make it false
    //if showing is flase make it true
    this.isShowing = !this.isShowing;
  }
}

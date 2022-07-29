import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
  price: number;
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  // name: string = 'Scribble Stones';
  // author: string = 'Diane Alber';
  // src: string =
  //   'https://m.media-amazon.com/images/P/B07PN7RP7G.01._SCLZZZZZZZ_SX500_.jpg';
  // name2: string =
  //   'TinkerLab Art Starts: 52 Projects for Open-Ended Exploration Paperback';
  // author2: string = 'Rachelle Doorley';
  // src2: string =
  //   'https://m.media-amazon.com/images/P/1611806682.01._SCLZZZZZZZ_SX500_.jpg';

  books: Book[] = [
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
  isShowing: boolean = true;
  name3: string = '';
  constructor() {}

  ngOnInit(): void {}
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

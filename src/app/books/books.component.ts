import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  name: string = 'Scribble Stones';
  author: string = 'Diane Alber';
  src: string =
    'https://m.media-amazon.com/images/P/B07PN7RP7G.01._SCLZZZZZZZ_SX500_.jpg';
  name2: string =
    'TinkerLab Art Starts: 52 Projects for Open-Ended Exploration Paperback';
  author2: string = 'Rachelle Doorley';
  src2: string =
    'https://m.media-amazon.com/images/P/1611806682.01._SCLZZZZZZZ_SX500_.jpg';
  isShowing: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}

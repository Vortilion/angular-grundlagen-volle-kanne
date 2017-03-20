import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookDataService } from "app/shared/book-data.service";
import { IBook } from "app/shared/ibook";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();
  books: IBook[];

  constructor(private bookDataService: BookDataService) { }

  ngOnInit() {
    this.titleClicked.emit('PONG');
    this.bookDataService
      .getBooks()
      .subscribe(b => this.books = b);
  }
}

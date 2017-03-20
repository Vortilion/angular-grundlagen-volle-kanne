import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IBook } from "app/shared/ibook";
import 'rxjs/add/operator/map';
import { IBookDetails } from "app/shared/ibook-details";

@Injectable()
export class BookDataService {
  private bookListUrl = 'http://localhost:4730/books';

  constructor(private http: Http) { }

  getBooks(): Observable<IBook[]> {
      return this.http
        .get(this.bookListUrl)
        .map(response => response.json());
  }

  getBookDetailsByIsbn(isbn: string): Observable<IBookDetails> {
      return this.http
        .get(this.bookListUrl + '/' + isbn)
        .map(response => response.json());
  }

  createBook() {
      return null;
  }

  updateBook() {
      return null;
  }

  deleteBook(isbn: string) {
      return null;
  }
}

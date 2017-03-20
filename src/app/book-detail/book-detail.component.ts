import { Component, OnInit } from '@angular/core';
import { IBookDetails } from "app/shared/ibook-details";
import { BookDataService } from "app/shared/book-data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  title: string = "Book Detail Component";
  bookDetails: IBookDetails;

  constructor(private bookDataService: BookDataService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params
        .subscribe((params) => {
            let isbn = params['isbn'];
            this.bookDataService
              .getBookDetailsByIsbn(isbn)
              .subscribe(bd => this.bookDetails = bd);
        });
  }
}

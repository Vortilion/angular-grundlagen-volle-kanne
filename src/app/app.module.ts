import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { CursorPositionComponent } from './cursor-position/cursor-position.component';
import { BookDataService } from "app/shared/book-data.service";
import { routing } from "./app.routing.module";
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CursorPositionComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    BookDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

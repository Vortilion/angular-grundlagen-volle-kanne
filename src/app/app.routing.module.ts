import { BookListComponent } from './book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from "app/book-detail/book-detail.component";

export const appRoutes: Routes = [
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'books/:isbn',
        component: BookDetailComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
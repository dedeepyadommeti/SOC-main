import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Import Observable and of
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, name: 'HTML 5' },
    { id: 2, name: 'CSS 3' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'Ajax Programming' },
    { id: 5, name: 'jQuery' },
    { id: 6, name: 'Mastering Node.js' },
    { id: 7, name: 'Angular JS 1.x' },
    { id: 8, name: 'ng-book 2' },
    { id: 9, name: 'Backbone JS' },
    { id: 10, name: 'Yeoman' }
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books); // Return as Observable<Book[]>
  }
}

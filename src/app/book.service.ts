import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface Book {
  id: number;  
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'http://localhost:3020/bookList';

  constructor(private http: HttpClient) {}

 
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      tap(data => console.log('Books fetched:', data)),
      catchError(this.handleError)
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3020/addBook', book, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError(this.handleError)
    );
  }
 
updateBook(id:number,book: Book): Observable<Book> {
  return this.http.put<Book>('http://localhost:3020/update', book, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }).pipe(
    catchError(this.handleError)
  );
}

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.booksUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (err.error instanceof Error) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Backend returned code ${err.status}, message: ${err.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}

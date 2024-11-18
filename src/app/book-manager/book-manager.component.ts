import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = { i: 0, titl: '', autho: '', publishedYea: 0 };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe(book => {
      this.books.push(book);
      this.newBook = { i: 0, titl: '', autho: '', publishedYea: 0 };
    });
  }

  updateBook(book: Book): void {
    this.bookService.updateBook(book.i,book).subscribe();
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.i !== id);
    });
  }
}

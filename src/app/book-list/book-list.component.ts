import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // Defining properties
  books: Book[] = [];
  newBook: Book = { id: 0, name: '' };
  editableBook: Book = { id: 0, name: '' };

  constructor(private bookService: BookService) {}

  // Implementing ngOnInit without any parameters and returning void
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  addBook(): void {
    if (this.newBook.name) {
      this.bookService.addBook(this.newBook).subscribe(
        (book) => {
          this.books.push(book);
          this.newBook = { id: 0, name: '' };
        },
        (error) => console.error('Error adding book:', error)
      );
    }
  }

  editBook(book: Book): void {
    this.editableBook = { ...book };
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);
    });
  }

  updateBook(): void {
    if (this.editableBook) {
      this.bookService.updateBook(this.editableBook.id,this.editableBook).subscribe(
        (updatedBook) => {
          const index = this.books.findIndex(book => book.id === updatedBook.id);
          if (index !== -1) {
            this.books[index] = updatedBook;
          }
          this.editableBook = { id: 0, name: '' };
        },
        (error) => console.error(error)
      );
    }
  }

  cancelEdit(): void {
    this.editableBook = { id: 0, name: '' };
  }
}

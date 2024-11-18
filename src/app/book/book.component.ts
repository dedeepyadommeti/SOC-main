import { Component, OnInit } from '@angular/core';
import { BookService } from '../eight-b/book.service';
import { Book } from '../eight-b/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = []; 
  selectedBook?: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks(); 
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books; 
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      }
    });
  }

  onSelect(book: Book): void {
    console.log('Selected book:', book);
    this.selectedBook = book;
  }
}

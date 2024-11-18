import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './book';
import { BookService } from '../eight-b/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[] = []; 

  constructor(
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    
    this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books.slice(1, 5); 
        console.log("OMGGGG" , this.books)
      },
      error: (error) => {
        console.error('Failed to load books:', error);
      }
    });
  }

  gotoDetail(book: Book): void {
    this.router.navigate(['/detail', book.id]);
  }
}

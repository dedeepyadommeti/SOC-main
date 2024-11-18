import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail-component.component.html',
  styleUrls: ['./book-detail-component.component.css']
})
export class BookDetailComponentComponent implements OnInit {
 
  book: { id: string; name: string } | undefined;

 
  private mockBooks = [
    { id: '2', name: 'CSS 3' },
    { id: '3', name: 'JavaScipt' },
    { id: '4', name: 'Ajax Programming' },
    { id: '5', name: 'J Query' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id) {
      this.book = this.mockBooks.find(book => book.id === id); 
    }
  }
}

import { Component } from '@angular/core';
// import { BookComponent } from '../book/book.component';
import{ BookListComponent} from '../book-list/book-list.component'

@Component({
  selector: 'app-nine-a',
  standalone: true,
  imports: [BookListComponent],
  templateUrl: './nine-a.component.html',
  styleUrl: './nine-a.component.css'
})
export class NineAComponent {

}

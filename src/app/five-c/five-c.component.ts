import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-five-c',
  standalone: true,
  imports: [FormsModule, CommonModule, SortPipe], 
  templateUrl: './five-c.component.html',
  styleUrls: ['./five-c.component.css'], 
})
export class FiveCComponent {
  sortoption: string = '';
  productsList: any[] = [
    { productName: 'Samsung J7', price: 18000 },
    { productName: 'Apple iPhone 6S', price: 60000 },
    { productName: 'Lenovo K5 Note', price: 10000 },
    { productName: 'Nokia 6', price: 15000 },
    { productName: 'Vivo V5 Plus', price: 26000 },
  ];
}

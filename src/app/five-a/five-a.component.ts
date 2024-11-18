import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-five-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './five-a.component.html',
  styleUrl: './five-a.component.css'
})
export class FiveAComponent {

  title = 'product details';
  productCode = 'PROD_P001';
  productName = 'Laptop';
}

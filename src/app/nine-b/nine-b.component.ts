import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nine-b',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './nine-b.component.html',
  styleUrl: './nine-b.component.css'
})
export class NineBComponent {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}

import { Component } from '@angular/core';
// import { registerLocaleData } from '@angular/common';
// import localeFrench from '@angular/common/locales/fr';
import { CommonModule } from '@angular/common';

// registerLocaleData(localeFrench);

@Component({
  selector: 'app-five-b',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './five-b.component.html',
  styleUrls: ['./five-b.component.css'] 
})
export class FiveBComponent {
  title = 'product details';
  productCode = 'PROD_P001';
  productName = 'Apple MPTT2 MacBook Pro';
  productPrice = 217021;
  purchaseDate = '1/17/2018';
  productTax = 0.1; 
  productRating = 4.92;
}

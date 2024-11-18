import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-four-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './four-b.component.html',
  styleUrls: ['./four-b.component.css']
})
export class FourBComponent {
  colspanValue: string ="2";
}

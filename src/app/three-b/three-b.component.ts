import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-three-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three-b.component.html',
  styleUrl: './three-b.component.css'
})
export class ThreeBComponent {
  isBordered = true;
  isBordered2 = true;
   isColor = true;

}

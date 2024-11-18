import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-three-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three-a.component.html',
  styleUrl: './three-a.component.css'
})
export class ThreeAComponent {
  colorName = 'yellow';
  color = 'red';
  colorName2 = 'red';
  fontWeight = 'bold';
  borderStyle = '1px solid black';
}

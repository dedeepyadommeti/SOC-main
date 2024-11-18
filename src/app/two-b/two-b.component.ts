import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-b.component.html',
  styleUrl: './two-b.component.css'
})
export class TwoBComponent {
  courses= [
    { id: 1, name: "TypeScript" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Node JS" },
    { id: 1, name: "TypeScript" }
  ];
}

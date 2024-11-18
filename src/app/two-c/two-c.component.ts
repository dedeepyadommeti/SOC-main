import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({

  selector: 'app-two-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-c.component.html',
  styleUrl: './two-c.component.css'
})
export class TwoCComponent {
  choice = 1;
  nextChoice() {
    this.choice++;
  }
}

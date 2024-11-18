import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoAComponent {
  isAuthenticated!: boolean;
  submitted = false;
  userName!: string;
  onSubmit(name: string, password: string) {
    this.submitted = true;
    this.userName = name;
    if (name === "Teja" && password === "Teja@509") {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
}

import { Component } from '@angular/core';
import { MessageDirective } from './message.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-three-c',
  standalone: true,
  imports: [MessageDirective,CommonModule],
  templateUrl: './three-c.component.html',
  styleUrl: './three-c.component.css'
})
export class ThreeCComponent {
  myMessage="Hello, I am from attribute directive";
  isVisible = true;
  toggleMessage() {
    this.isVisible = !this.isVisible;  
  }
}

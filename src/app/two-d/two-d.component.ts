import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RepeatDirective } from './repeat.directive'; 

@Component({
  selector: 'app-two-teja',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-d.component.html',
  styleUrls: ['./two-d.component.css']
})
export class TwoDComponent {
  rep = Array(5)
 }

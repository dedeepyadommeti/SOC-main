import { Component } from '@angular/core';
import { CoursesListComponent } from '../courses-list/courses-list.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-six-a',
  standalone: true,
  imports: [CoursesListComponent,CommonModule],
  templateUrl: './six-a.component.html',
  styleUrl: './six-a.component.css'
})
export class SixAComponent {
  name!: string;
}

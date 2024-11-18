import { Component } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-six-b',
  standalone: true,
  imports: [CourseListComponent,CommonModule],
  templateUrl: './six-b.component.html',
  styleUrl: './six-b.component.css'
})
export class SixBComponent {
  message!: string;
  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
}
}

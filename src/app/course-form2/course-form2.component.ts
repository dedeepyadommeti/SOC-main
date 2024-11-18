import { Component } from '@angular/core';
import { Course } from '../eight-a/Course';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-form2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './course-form2.component.html',
  styleUrl: './course-form2.component.css'
})
export class CourseForm2Component {
  course: Course = new Course(1, 'Angular 2', '4 days', 'james@gmail.com');
  submitted = false;
  onSubmit() { this.submitted = true; }
}

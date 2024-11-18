import { Component } from '@angular/core';
import { Course } from '../seven-a/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  imports: [CommonModule,FormsModule],
  standalone:true
})
export class CourseFormComponent {
  course = new Course(1, 'Angular', '5 days');
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }
}

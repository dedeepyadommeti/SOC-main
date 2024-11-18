import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  standalone: true,
  imports: [CommonModule]  
})
export class CoursesListComponent {
  courses = [
    { courseId: 1, courseName: 'Node JS', duration: '4 weeks', description: 'Learn the basics of Node.js' },
    { courseId: 2, courseName: 'Typescript', duration: '3 weeks', description: 'Master TypeScript fundamentals' },
    { courseId: 3, courseName: 'Angular', duration: '5 weeks', description: 'Develop web apps using Angular' },
    { courseId: 4, courseName: 'React JS', duration: '6 weeks', description: 'Dive into React.js framework' },
  ];

  course: any[] = [];

  @Input() set cName(name: string) {
    this.course = this.courses.filter(c => c.courseName === name);
  }
}

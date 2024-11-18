import { Component, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseFormComponent} from '../course-form/course-form.component'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-seven-a',
  standalone: true,
  imports: [FormsModule,CourseFormComponent,CommonModule],
  templateUrl: './seven-a.component.html',
  styleUrl: './seven-a.component.css'
})
export class SevenAComponent {

}

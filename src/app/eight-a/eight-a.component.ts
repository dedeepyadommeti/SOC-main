import { Component } from '@angular/core';
import {CourseForm2Component} from '../course-form2/course-form2.component'
import { EmailValidator } from '../course-form2/email.validator'

@Component({
  selector: 'app-eight-a',
  standalone: true,
  imports: [CourseForm2Component,EmailValidator],
  templateUrl: './eight-a.component.html',
  styleUrl: './eight-a.component.css'
})
export class EightAComponent {

}

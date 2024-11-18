import { Component } from '@angular/core';
import {SecondComponent} from '../second/second.component'
import {FirstComponent} from '../first/first.component'

@Component({
  selector: 'app-six-c',
  standalone: true,
  imports: [FirstComponent, SecondComponent],
  templateUrl: './six-c.component.html',
  styleUrl: './six-c.component.css'
})
export class SixCComponent {

}

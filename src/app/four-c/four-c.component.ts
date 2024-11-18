import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-four-c',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './four-c.component.html',
  styleUrl: './four-c.component.css'
})
export class FourCComponent {
  name: string = 'Angular';
}

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-one-c',
  standalone: true,
  imports: [],
  templateUrl: './one-c.component.html',
  styleUrl: './one-c.component.css'
})
export class OneCComponent implements OnInit {
  course = 'Angular' 
  constructor (){}
  ngOnInit() {
      
  }
  toggleButton (){
    this.course = this.course === 'Angular' ? 'TypeScript' : 'Angular'
  }
}

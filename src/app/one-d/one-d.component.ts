import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-one-d',
  standalone: true,
  imports: [],
  templateUrl: './one-d.component.html',
  styleUrl: './one-d.component.css'
})
export class OneDComponent implements OnInit {
   course = "Angular"
   constructor () {}
   ngOnInit(): void {
       
   }
   changeCourse(){
    this.course = this.course === "Angular" ? "React" : "Angular";
   }
}

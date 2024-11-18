import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-one-b',
  standalone: true,
  imports: [],
  templateUrl: './one-b.component.html',
  styleUrl: './one-b.component.css'
})
export class OneBComponent implements OnInit {
  courseName: string = "Angular";
  constructor() { }
  ngOnInit() {
  }
 }
 

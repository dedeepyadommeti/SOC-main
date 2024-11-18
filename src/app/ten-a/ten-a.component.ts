import { Component } from '@angular/core';
import {DashboardComponent} from '../dashboard/dashboard.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ten-a',
  standalone: true,
  imports: [RouterModule,DashboardComponent],
  templateUrl: './ten-a.component.html',
  styleUrl: './ten-a.component.css'
})
export class TenAComponent {

}

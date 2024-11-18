import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {OneCComponent} from './one-c/one-c.component'
import {OneDComponent} from './one-d/one-d.component'
import { TwoAComponent } from './two-a/two.component';
import { TwoBComponent } from './two-b/two-b.component';
import { TwoCComponent } from './two-c/two-c.component';
import { TwoDComponent } from './two-d/two-d.component';
import { ThreeAComponent } from './three-a/three-a.component';
import { ThreeBComponent } from './three-b/three-b.component';
import { ThreeCComponent } from './three-c/three-c.component';
import { FourAComponent } from './four-a/four-a.component';
import { FourBComponent } from './four-b/four-b.component';
import { FourCComponent } from './four-c/four-c.component';
import { FiveAComponent } from './five-a/five-a.component';
import { FiveBComponent } from './five-b/five-b.component';
import { FiveCComponent } from './five-c/five-c.component';
import { SixAComponent } from './six-a/six-a.component';
import { SixBComponent } from './six-b/six-b.component';
import {SixCComponent} from './six-c/six-c.component';
import {SixDComponent}  from './six-d/six-d.component'
import { SevenAComponent } from './seven-a/seven-a.component';
import { SevenBComponent } from './seven-b/seven-b.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component'
import { EightAComponent } from './eight-a/eight-a.component';
import {EightBComponent} from './eight-b/eight-b.component'
import {EightCComponent} from './eight-c/eight-c.component'

import {OneBComponent} from './one-b/one-b.component'
import {NineAComponent} from './nine-a/nine-a.component'
import {NineBComponent} from './nine-b/nine-b.component'
import { HttpClientModule } from '@angular/common/http';
import {TenAComponent} from './ten-a/ten-a.component'
import {TenBComponent} from './ten-b/ten-b.component'
import { TenCComponent } from './ten-c/ten-c.component';
import { TenDComponent } from './ten-d/ten-d.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RegistrationFormComponent,
    ReactiveFormsModule,
    RouterOutlet,
    FormsModule,
    OneBComponent,
    OneCComponent,
    OneDComponent,
    TwoAComponent,
    TwoBComponent,
    TwoCComponent,
    TwoDComponent,
    ThreeAComponent,
    ThreeBComponent,
    ThreeCComponent,
    FourAComponent,
    FourBComponent,
    FourCComponent,
    FiveAComponent,
    FiveBComponent,
    FiveCComponent,
    SixAComponent,
    SixBComponent,
    SixCComponent,
    SixDComponent,
    SevenAComponent,
    SevenBComponent,
    EightAComponent,
    EightBComponent,
    EightCComponent,
    NineAComponent,
    NineBComponent,TenAComponent,TenBComponent,TenCComponent,TenDComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rookie';
}

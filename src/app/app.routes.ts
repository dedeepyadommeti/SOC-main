// import { Routes } from '@angular/router';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { HomeComponent} from './home/home.component';


// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './ten-b/auth.gurad';
import { LoginComponent } from './login/login.component';
import { EightBComponent } from './eight-b/eight-b.component';
import { BookDetailComponentComponent } from './book-detail-component/book-detail-component.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'books', 
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule), 
    canActivate: [AuthGuard]
  },
  { path: 'list', component: EightBComponent },
  { path: 'detail/:id', component: BookDetailComponentComponent },
  { path: 'login', component: LoginComponent },

 
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: '**', redirectTo: '/login' }
];

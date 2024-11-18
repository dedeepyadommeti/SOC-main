import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightBComponent } from '../eight-b/eight-b.component';
import { BookDetailComponentComponent } from '../book-detail-component/book-detail-component.component';

const routes: Routes = [
  { path: 'list', component: EightBComponent },
  { path: 'detail/:id', component: BookDetailComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

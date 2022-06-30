import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import {UpdateBookComponent} from './update-book/update-book.component';
const routes: Routes = [
  {path: 'book', component:BookListComponent },
  {path:'add-book',component:AddBookComponent},
  {path:'update-book/:id', component:UpdateBookComponent},
  {path: '', redirectTo:'book', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

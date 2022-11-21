import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { RentersComponent } from './components/renters/renters.component';
import { RentsComponent } from './components/rents/rents.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    data: { show: true, name: 'Books' },
  },
  {
    path: 'rents',
    component: RentsComponent,
    data: { show: true, name: 'Rents' },
  },
  {
    path: 'renters',
    component: RentersComponent,
    data: { show: true, name: 'Renters' },
  },
  { path: '**', redirectTo: 'books', data: { show: false, name: '' } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

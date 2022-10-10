import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  // { path: 'movies/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

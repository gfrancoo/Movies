import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MovieComponent},
  {path: 'movies/details/:id', component: DetailsComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

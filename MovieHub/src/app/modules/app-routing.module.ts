import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../ui/home-page/home-page.component';
import { AuthApprovedComponent } from '../components/auth-approved/auth-approved.component';
import { ProfileDetailComponent } from '../components/profile-detail/profile-detail.component';
import { SeriesPageComponent } from '../ui/series-page/series-page.component';
import { MoviesPageComponent } from '../ui/movies-page/movies-page.component';
import { ActorsPageComponent } from '../ui/actors-page/actors-page.component';
import { MovieDetailComponent } from '../components/movie-detail/movie-detail.component'; // Importa el componente MovieDetailComponent
import { MovieDetailPageComponent } from '../ui/movie-detail-page/movie-detail-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'approved', component: AuthApprovedComponent },
  { path: 'profile', component: ProfileDetailComponent },
  { path: 'series', component: SeriesPageComponent },
  { path: 'movies', component: MoviesPageComponent },
  { path: 'actors', component: ActorsPageComponent },
  { path: 'movie-details/:id', component: MovieDetailPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

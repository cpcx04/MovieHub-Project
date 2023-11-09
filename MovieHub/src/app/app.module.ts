import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalImagesListComponent } from './components/horizontal-images-list/horizontal-images-list.component';
import { HorizontMoviesListComponent } from './components/horizont-movies-list/horizont-movies-list.component';
import { VerticalMoviesListComponent } from './components/vertical-movies-list/vertical-movies-list.component';
import { VerticalSeriesListComponent } from './components/vertical-series-list/vertical-series-list.component';
import { HorizontalSeriesListComponent } from './components/horizontal-series-list/horizontal-series-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HorizontalActorsListComponent } from './components/horizontal-actors-list/horizontal-actors-list.component';
import { VerticalActorsListComponent } from './components/vertical-actors-list/vertical-actors-list.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { MoviesPageComponent } from './ui/movies-page/movies-page.component';
import { SeriesPageComponent } from './ui/series-page/series-page.component';
import { ActorsPageComponent } from './ui/actors-page/actors-page.component';
import { MovieDetailPageComponent } from './ui/movie-detail-page/movie-detail-page.component';
import { SerieDetailPageComponent } from './ui/serie-detail-page/serie-detail-page.component';
import { ActorDetailPageComponent } from './ui/actor-detail-page/actor-detail-page.component';
import { CompanyDetailPageComponent } from './ui/company-detail-page/company-detail-page.component';
import { ProfilePageComponent } from './ui/profile-page/profile-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SerieCardComponent } from './components/serie-card/serie-card.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorSmallCardComponent } from './components/actor-small-card/actor-small-card.component';
import { VerticalMovieVideosListComponent } from './components/vertical-movie-videos-list/vertical-movie-videos-list.component';
import { VerticalSeriesVideosListComponent } from './components/vertical-series-videos-list/vertical-series-videos-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HorizontalImagesListComponent,
    HorizontMoviesListComponent,
    VerticalMoviesListComponent,
    VerticalSeriesListComponent,
    HorizontalSeriesListComponent,
    NavBarComponent,
    HorizontalActorsListComponent,
    VerticalActorsListComponent,
    ProfileDetailComponent,
    CompanyDetailComponent,
    ActorDetailComponent,
    MovieDetailComponent,
    SerieDetailComponent,
    HomeDetailComponent,
    ReviewsListComponent,
    HomePageComponent,
    MoviesPageComponent,
    SeriesPageComponent,
    ActorsPageComponent,
    MovieDetailPageComponent,
    SerieDetailPageComponent,
    ActorDetailPageComponent,
    CompanyDetailPageComponent,
    ProfilePageComponent,
    MovieCardComponent,
    SerieCardComponent,
    ActorCardComponent,
    ReviewCardComponent,
    ActorSmallCardComponent,
    VerticalMovieVideosListComponent,
    VerticalSeriesVideosListComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie-details', component: MoviedetailsComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'nowplaying', component: NowplayingComponent},
  {path: 'comingsoon', component: ComingsoonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

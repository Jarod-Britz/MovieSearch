import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'nowplaying', component: NowplayingComponent},
  {path: 'comingsoon', component: ComingsoonComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

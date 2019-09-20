import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule } from '@angular/material';
import { TrendingComponent } from './trending/trending.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { HomeComponent } from './home/home.component';
import { MovieService } from './services/movie.service';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrendingComponent,
    ComingsoonComponent,
    NowplayingComponent,
    HomeComponent,
    ResultsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

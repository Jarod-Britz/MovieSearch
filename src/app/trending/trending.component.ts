import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  movies;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTrendingMovies()
    .subscribe((data) => {
      this.movies = data['results'];
      console.log(this.movies);
      
      
    })
  }

  
}

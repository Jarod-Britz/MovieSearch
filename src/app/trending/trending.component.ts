import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  movies;

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
    this.movieService.getTrendingMovies()
    .subscribe((data) => {
      this.movies = data['results'];
      
      
    })
  }

  getMovieID(movie){

    this.movieService.getMovieID(movie);
    this.router.navigate(['/movie-details']);

}

  
}

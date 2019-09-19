import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {
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

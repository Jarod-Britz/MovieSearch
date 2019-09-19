import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {
  movies;

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
    this.movieService.getComingSoonMovies()
    .subscribe((data) => {
      this.movies = data['results'];

    })
  }

  getMovieID(movie){

    this.movieService.getMovieID(movie);
    this.router.navigate(['/movie-details']);

}

}

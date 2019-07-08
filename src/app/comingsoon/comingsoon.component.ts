import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {
  movies;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getComingSoonMovies()
    .subscribe((data) => {
      this.movies = data['results'];
       console.log(this.movies);

    })
  }

}

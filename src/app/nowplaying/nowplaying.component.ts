import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {
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

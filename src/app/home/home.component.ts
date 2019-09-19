import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieName: string;
  userInput: string;
movieId;
movies;
details;
cast;


  constructor(private movieService: MovieService, 
              private router: Router,
              private http: HttpClient) { 

  }

  ngOnInit() {
    this.movieService.getPopularMovies()
    .subscribe((data) => {
      this.movies = data['results'];

    })


  }

  getMovieID(movie){

    this.movieService.getMovieID(movie);
    this.router.navigate(['/movie-details']);

}

// search() {
//   this.movieService.getResults(this.movieName).subscribe((data) => {
//     this.movies = data['results'];
//     console.log(this.movies);

//     localStorage.setItem("movies", JSON.stringify(this.movies))
//   })
// }

}
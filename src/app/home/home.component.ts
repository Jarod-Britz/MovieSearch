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
  userInput: string;
movieId;
movies;
details;


  constructor(private movieService: MovieService, 
              private router: Router,
              private http: HttpClient) { 

  }

  ngOnInit() {
    this.movieService.getPopularMovies()
    .subscribe((data) => {
      this.movies = data['results'];
       console.log(this.movies);

    })


  }

  getMovieID(movie){

    this.movieService.getMovieID(movie);
    this.router.navigate(['/movie-details']);
    // this.movieService.selectedMovie = movie;
    

    // let movieTitle = movie.title
    // let movieId = movie.id;

    // console.log(movieId);
    // console.log(movieTitle);
    
    // this.router
    

    // this.http.get("https://api.themoviedb.org/3/search/movie?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1&include_adult=false&query="+movieTitle)
    // .subscribe((data) => {
    //   console.log(data);
    //   this.details = data['results'];
    //   console.log(this.details);
      
    // })

}

}
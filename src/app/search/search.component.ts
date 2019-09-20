import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieName: string;
  userInput: string;
  movieId;
  movies;
  details;
  cast;


  constructor(private movieService: MovieService, 
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }


  search() {
    this.movieService.getResults(this.movieName).subscribe((data) => {
      this.movies = data['results'];
  
      localStorage.setItem("movies", JSON.stringify(this.movies))
    })
  }

}

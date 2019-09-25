import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {FormControl} from '@angular/forms';
// import {map, startWith} from 'rxjs/operators';

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


  // myControl = new FormControl();
  // mpovies: string[] = this.movies;
  // filteredOptions: Observable<string[]>;


  constructor(private movieService: MovieService, 
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    // this.filteredOptions = this.movieService.getPopularMovies()
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filter(value))
    //   );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.movies.filter(movie => movie.toLowerCase().includes(filterValue));
  // }


  getMovieID(movie){

    this.movieService.getMovieID(movie);
    this.router.navigate(['/movie-details']);

}


  search() {
    this.movieService.getResults(this.movieName).subscribe((data) => {
      this.movies = data['results'];
  
      localStorage.setItem("movies", JSON.stringify(this.movies))
    })
  }

}

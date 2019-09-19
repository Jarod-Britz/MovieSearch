import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class MovieService {
  private userInput = new BehaviorSubject("");
  currentInput = this.userInput.asObservable();
  selectedMovie: any;
  details: any;
  movieCasts: any;
  movies: any;
  movieName: any;

  constructor(private http: HttpClient, private router: Router) { }

  changeInput(textValue: string) {
    this.userInput.next(textValue);
  }

  // public getMovies(movieName) {
  //   return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1&include_adult=false&query=${movieName}`);
  // }

  search() {
    this.getResults(this.movieName).subscribe((data) => {
      this.movies = data['results'];
      console.log(this.movies);

    })
  }

  getResults(movieName): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1&include_adult=false&query=${movieName}`);
    
  }

  getPopularMovies(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1")
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/trending/movie/day?api_key=17f709c69af2597f84403a41a627adac")
  }

  getComingSoonMovies(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1")
  }

  getNowPlayingMovies(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1")
  }


  getMovieID(movie) {
    this.selectedMovie = movie;

  }


}



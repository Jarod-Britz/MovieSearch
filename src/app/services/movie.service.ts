import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class MovieService {
  selectedMovie: any;
  details: any;

  constructor(private http: HttpClient) { }


  public getMovies(movieName){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1&include_adult=false&query=${movieName}`);
    }


  getPopularMovies(): Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1")
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/trending/movie/day?api_key=17f709c69af2597f84403a41a627adac")
  }
  
  getComingSoonMovies(): Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1")
  }
  
  getNowPlayingMovies(): Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1")
  }



getMovieID(movie){
  this.selectedMovie = movie;
  
  let movieTitle = movie.title
  let movieId = movie.id;

  console.log(movieId);
  console.log(movieTitle);

  

  this.http.get("https://api.themoviedb.org/3/search/movie?api_key=17f709c69af2597f84403a41a627adac&language=en-US&page=1&include_adult=false&query="+movieTitle)
  .subscribe((data) => {
    // console.log(data);
    this.details = data['results'];
    console.log(this.details);
    
  })

}

    
}



import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  baseUrl = environment.baseUrl;
  apiKey = environment.apiKey;
  movies;
  movieName: string;
  movieSearchResults: any;

  constructor(private movieService: MovieService,
              private router: Router,
              private location: Location,
              private http: HttpClient) { }

  ngOnInit() {
    this.movieService.search()


    this.movieService.getResults(this.movies)
    .subscribe((data) => {
      this.movies = data['results'];
       console.log(this.movies);
      
    })

    // this.movieSearchResults = this.movieService.movieResults;
    // console.log(this.movieSearchResults);
    
    
    
  }

  // searchApi(userInput: string) {
  //   if (userInput) {
  //     this.http
  //       .get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${userInput}`)
  //       .subscribe(res => {
  //           this.movies = res;
  //         },
  //         error => {
  //           console.log("Error", error);
  //           this.router.navigate([""]);
  //         }
  //       );
  //   }
  //   else{
  //     this.router.navigate([""]);
  //   }
  // }

  
  backClicked(){
    this.location.back();
  }
  



}

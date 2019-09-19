import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, ChildActivationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  userSelection: any;
  movieId;
  movies;
  selectedMovie;
  


  @Input()
 details: any[];
  movieName: string;
  movieDetails$: Object;
  currentMovie;
  casts: any;
  
  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private http: HttpClient,
              private location: Location) { }

  ngOnInit() {
    this.selectedMovie = this.movieService.selectedMovie;
    this.movieId = this.selectedMovie.id;

    // this.casts = this.movieService.movieCasts;
    // console.log(this.casts);
    
    
    

}

backClicked(){
  this.location.back();
}




}

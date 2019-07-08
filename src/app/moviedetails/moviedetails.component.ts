import { Component, OnInit, Input, ViewChild, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, ChildActivationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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
  
  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.selectedMovie = this.movieService.selectedMovie;
    console.log(this.selectedMovie);
    



}




}

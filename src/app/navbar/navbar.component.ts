import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  movies;
  movieName: string;
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
  }

  // search() {
  //   this.movieService.getResults(this.movieName).subscribe((data) => {
  //     this.movies = data['results'];
  //     this.router.navigate(['results'])
  //     console.log(this.movies);

  //   })
  // }

  getResults() {
    this.router.navigate(["results"]);
  }

}

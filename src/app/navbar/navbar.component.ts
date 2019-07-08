import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  movies;
  movieName: string;

  @Output() featureSelected = new EventEmitter<string>();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  search() {
    this.movieService.getMovies(this.movieName).subscribe((data) => {
      this.movies = data['results'];
      console.log(this.movies);

      localStorage.setItem("movies", JSON.stringify(this.movies))
    })
  }

}

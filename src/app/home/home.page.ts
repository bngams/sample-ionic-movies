import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title = 'Variable simple';
  searchTerm: string;

  // movies array
  movies: Observable<any>;

  constructor(private movieService: MovieService) {
  }

  // @PostConstruct
  ngOnInit() {
  }

  search() {
    console.log('Search term: ', this.searchTerm);
    this.movies = this.movieService.search(this.searchTerm);
  }


}

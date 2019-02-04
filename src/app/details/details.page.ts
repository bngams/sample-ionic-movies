import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  movie: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.initMovie();
  }

  initMovie() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Id du film ', id);
    // Get the information from the API
    this.movieService.details(id).subscribe(result => {
      this.movie = result;
    });
  }

  goToWebsite() {
    window.open(this.movie.Website, '_blank');
  }
}

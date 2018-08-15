import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../services/movies.service'
import { Movie , MovieMetadat } from '../services/movie'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private movies : MovieMetadat[] = [];

  constructor( private moviesService : MoviesService) { }

  ngOnInit() {

    this.moviesService.getMovies()
    .subscribe(data => {
      this.movies = data;
    })
  }

}

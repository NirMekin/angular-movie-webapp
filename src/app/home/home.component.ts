import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../services/movies.service'
import { Movie } from '../services/movie'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private movies : Movie[] = [];

  constructor( private moviesService : MoviesService) { }

  ngOnInit() {

    // compare between rates of movies
    let compare = (a,b) => {
      if (a.rate.rate < b.rate.rate)
        return 1;
      if (a.rate.rate> b.rate.rate)
        return -1;
      return 0;
    }


    this.moviesService.getMovies()
    .subscribe(data => {
      let moviesSorted = data.movies.sort( compare);
      
      //return 10 top movies after compare rates
      this.movies = moviesSorted.slice(0,10);
    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import {Http, Response} from '@angular/http'
import { Observable , of } from 'rxjs/';
import { map, takeUntil, tap } from 'rxjs/operators';

import { Movie  , MovieMetadat } from './movie';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }
  private compare = (a,b) => {
    if (a.rate < b.rate)
      return 1;
    if (a.rate> b.rate)
      return -1;
    return 0;
  }

  // return top 10 rated movie
  getMovies():Observable<MovieMetadat[]>{
    return this.http.get<MovieMetadat[]>("../../assets/movie_api/movies-metadata.json")
    .pipe( 
      map( data => {
        let moviesSorted = data.sort( this.compare );
      
        //return 10 top movies after compare rates
        return moviesSorted.slice(0,10);

      })
    )
  }

  getMovieByName(name):Observable<Movie>{
    return this.http.get<Movie>("../../assets/movie_api/movies.json")
    .pipe(
      filter( movie => movie.name === name)
    )
  }
  
  extractData(res : Response){
    return res
  }
}

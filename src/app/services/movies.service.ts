import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';

import { Movie } from './movie';
import { Observable , of } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  // return top 10 rated movie
  getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>("../../assets/movie_api/movies.json");
  }

}

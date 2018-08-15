import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Movie } from './movie';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) { }

  

  // getMoviesByGener(gener): Promise<Movie[]>{
  //   return this.http.get(`../../assets/movie_api/movies.json`)
  //           .toPromise()
  //           .then(response => response.json().movies.filter( i => i.gener = gener) as Movie[])
  // }

  getMoviesByGener(gener): Observable<Movie[]>{
    return this.http.get<Movie[]>("../../assets/movie_api/movies.json");
  }


  getMoviesByName(name): Observable<Movie[]>{
    return this.http.get<Movie[]>("../../assets/movie_api/movies.json");
  }
  
}

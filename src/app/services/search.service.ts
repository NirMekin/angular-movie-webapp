import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Movie , MovieMetadat } from './movie';
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

  getMoviesByGener(gener): Observable<MovieMetadat[]>{
    return this.http.get<MovieMetadat[]>("../../assets/movie_api/movies-metadata.json");
  }


  getMoviesByName(name): Observable<MovieMetadat[]>{
    return this.http.get<MovieMetadat[]>("../../assets/movie_api/movies-metadata.json");
  }
  
}

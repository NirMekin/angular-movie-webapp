import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Movie , MovieMetadat } from './movie';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) { }

 

  getMoviesByGener(gener): Observable<MovieMetadat[]>{
    return this.http.get<MovieMetadat[]>("../../assets/movie_api/movies-metadata.json")
            .pipe(
              map( movie => movie.filter( i => i.geners.includes(gener) ))
            );
  }


  getMoviesByName(name): Observable<MovieMetadat[]>{
    return this.http.get<MovieMetadat[]>("../../assets/movie_api/movies-metadata.json")
           .pipe(
             map( data => data.filter(i => i.name.indexOf(name) !== -1 ))
           )
  }
  
}

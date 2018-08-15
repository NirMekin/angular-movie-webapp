import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http/';
import { map, takeUntil, tap , filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private moviesService : MoviesService , private http : HttpClient) { }

  extractDataByType(type , key):Observable<any>{
    console.log(type,key)
    switch(type){
      case 'movie' : return this.http.get("../../assets/movie_api/movies.json")
                            .pipe(
                              map( data => {
                                let tempData = data.filter( movie => movie.name === key)[0]
                                let movieModalData = {
                                  title : tempData.name,
                                  info : {
                                    stars : tempData.stars,
                                    director : tempData.director
                                  },
                                  main : tempData.desc,
                                  image : tempData.poster
                                }
                                console.log(movieModalData.image)
                                return movieModalData;
                              })
                            )
    }
  }
}
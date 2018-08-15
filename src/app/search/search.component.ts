import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute , private searchService : SearchService) { }

  private searchData = [];
  private searchInput : string = "";
  ngOnInit() {
    this.activatedRouter.params.subscribe((params: Params) => {
      let gener = params['gener']
      if(gener){
        this.searchService.getMoviesByGener(gener)
        .subscribe( data => {
          this.searchData = data.movies.filter(i => i.geners.includes(gener));
        })
      }
    })
      
  }

  //on click button 'search' in case there is an input (text) will call the method getMoviesByName and find the 
  // movies related by name (title contains the input text)
  searchMovie(){
    if(this.searchInput.length > 0)
    this.searchService.getMoviesByName(this.searchInput)
    .subscribe(data => {
      this.searchData = data.movies.filter(i => i.name.indexOf(this.searchInput) !== -1 )
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tile-movie',
  templateUrl: './tile-movie.component.html',
  styleUrls: ['./tile-movie.component.css']
})
export class TileMovieComponent implements OnInit {

  @Input() data;
  private styleObj = {};
  
  constructor() { }

  ngOnInit() {
    let h = 200;
    let s = '100%';
    let l = Math.random() * 100  ;
    this.styleObj['background-color'] = `hsl(${h},${s},${l}%)`;
    this.styleObj['color'] = l < 50 ? 'white' : 'black';
    this.styleObj['border-color'] = `hsl(${h},${s},${100-l}%)`; 
  }

}

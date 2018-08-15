import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //currently only movie (for movie modal)
  @Input() type;

  @Input() title;
  @Input() main;
  @Input() info;
  @Input() others;

  
  constructor() { }

  ngOnInit() {

  }

}

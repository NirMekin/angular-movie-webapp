import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.component.html',
  styleUrls: ['./modal-movie.component.css']
})
export class ModalMovieComponent implements OnInit {

  @Input() title;
  @Input() main;
  @Input() info;
  @Input() others;
  private closeResult: string;
  private imageUrl: string;
  constructor(private modalService: NgbModal ) {}

  ngOnInit(){
    //assign src url of the current movie poster
    // this.imageUrl = "/assets/" + this.others.imageUrl;
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
      this.imageUrl = this.others;
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}

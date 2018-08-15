import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { ModalService } from '../services/modal.service';
import { NgbModal , ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //currently only movie (for movie modal)
  @Input() type;
  @Input() key;
  private title;
  private main;
  private info;
  private links;
  private others;
  private image;
  private closeResult: string;
  constructor(private modalServiceRequest : ModalService , private modalService: NgbModal) { }

  ngOnInit() {
    this.modalServiceRequest.extractDataByType(this.type,this.key)
    .subscribe( data => {
       this.main = data.main;
       this.title = data.title;
       this.info = data.info;
       this.links = data.links;
       this.image = "/assets/" + data.image;
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

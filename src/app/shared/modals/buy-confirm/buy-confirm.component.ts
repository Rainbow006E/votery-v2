import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buy-confirm',
  templateUrl: './buy-confirm.component.html',
  styleUrls: ['./buy-confirm.component.scss']
})
export class BuyConfirmComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }

  buyConfirm() {
    
  }
}

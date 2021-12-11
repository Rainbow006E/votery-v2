import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sell-confirm',
  templateUrl: './sell-confirm.component.html',
  styleUrls: ['./sell-confirm.component.scss']
})
export class SellConfirmComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }

  sellConfirm() {
    
  }
}

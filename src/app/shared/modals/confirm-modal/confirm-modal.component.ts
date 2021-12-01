import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() public type: string;
  depositTabIndex: number = 0;

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void { }
  
  closeModal() {
    this.activeModal.close();
  }

  selectChange(index: any) {
    this.depositTabIndex = index;
  }

  onPercentChange(percent: number) {
    console.log('here');
  }
}

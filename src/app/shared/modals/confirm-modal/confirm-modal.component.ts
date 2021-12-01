import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VerificationCodeComponent } from '../verification-code/verification-code.component';

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

  confirm() {
    this.closeModal();
    if (this.type === "withdraw") {
      const verificationCodeModalRef = this.ngbModal.open(VerificationCodeComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium verificationCode' });
      verificationCodeModalRef.componentInstance.type = "exchange";
      verificationCodeModalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}

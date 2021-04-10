import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-progress-in-modal',
  templateUrl: './progress-in-modal.component.html',
  styleUrls: ['./progress-in-modal.component.scss']
})
export class ProgressInModalComponent implements OnInit {
  @Input() public type: string;

  constructor(
    private ngbModal: NgbModal,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.activeModal.close();
      const successModalRef = this.ngbModal.open(SuccessModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-normal' });
      successModalRef.componentInstance.type = this.type;
      successModalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }, 3000);
  }
}

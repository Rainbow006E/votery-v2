import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ProgressInModalComponent } from '../progress-in-modal/progress-in-modal.component';
import { TermsConditionsModalComponent } from '../terms-conditions-modal/terms-conditions-modal.component';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepositModalComponent implements OnInit {
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

  accept() {
    this.closeModal();
    const confirmModalRef = this.ngbModal.open(ConfirmModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-confirm' });
    confirmModalRef.componentInstance.type = "exchange";
    confirmModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}

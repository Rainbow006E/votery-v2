import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-withdraw-modal',
  templateUrl: './withdraw-modal.component.html',
  styleUrls: ['./withdraw-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithdrawModalComponent implements OnInit {
  depositTabIndex: number = 0;
  eurValue: number = 0;
  btcValue: number = 0;
  ethValue: number = 0;

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.eurValue = 10.00;
    this.btcValue = 0.001;
    this.ethValue = 0.3;
  }

  closeModal() {
    this.activeModal.close();
  }

  selectChange(index: any) {
    this.depositTabIndex = index;
  }

  onPercentChange(percent: number) {
    console.log('here');
  }

  withdraw() {
    this.closeModal();
    const progressInModalRef = this.ngbModal.open(SuccessModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-normal' });
    progressInModalRef.componentInstance.type = "withdraw";
    progressInModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}

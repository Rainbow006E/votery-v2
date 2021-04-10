import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  termsPricacy(e) {
    e.preventDefault();
    const termsConditionsModalRef = this.ngbModal.open(TermsConditionsModalComponent, { backdrop: 'static', centered: true, size: 'lg' });
    termsConditionsModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  deposit() {
    this.closeModal();
    const progressInModalRef = this.ngbModal.open(ProgressInModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-normal' });
    progressInModalRef.componentInstance.type = "deposit";
    progressInModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}

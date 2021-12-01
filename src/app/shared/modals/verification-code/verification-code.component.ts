import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
import { ProgressInModalComponent } from '../progress-in-modal/progress-in-modal.component';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {
  expired: boolean = false;
  currentTime: number = 0;
  currentPercent: number = 0;
  expiredTime: number = 60;
  // Sub Timer circle progressive settings
  CiicleProgressSettings: any = {
    radius: 16,
    fontSize: 12,
    outerStrokeColor: '#FD8300',
    subtitleColor: '#13131380'
  };
  subLeftSec: number = 0;

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.startTimer(this.expiredTime);
  }

  closeModal() {
    this.activeModal.close();
  }

  startTimer(seconds: number) {
    const timer$ = interval(1000);
    const sub = timer$.subscribe((sec) => {
      this.subLeftSec = sec;
      this.currentTime = this.expiredTime - sec;
      this.currentPercent = Math.round(100 - 100 * sec / this.expiredTime);
      if (this.subLeftSec === seconds) {
        sub.unsubscribe();
        this.expired = true;
        this.CiicleProgressSettings.outerStrokeColor = "#F8007A";
        this.CiicleProgressSettings.subtitleColor = "#F8007A";
      }
    });
  }

  submitOrResend(expired: boolean) {
    if (expired) {
      this.CiicleProgressSettings.outerStrokeColor = "#FD8300";
      this.CiicleProgressSettings.subtitleColor = "#13131380";
      this.startTimer(this.expiredTime);
    } else {
      this.closeModal();
      const progressInModalRef = this.ngbModal.open(ProgressInModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-normal' });
      progressInModalRef.componentInstance.type = "withdraw";
      progressInModalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}

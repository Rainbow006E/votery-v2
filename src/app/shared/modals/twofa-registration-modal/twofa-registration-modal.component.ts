import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VerifyGoogleAuthModalComponent } from '../verify-google-auth-modal/verify-google-auth-modal.component';

@Component({
  selector: 'app-twofa-registration-modal',
  templateUrl: './twofa-registration-modal.component.html',
  styleUrls: ['./twofa-registration-modal.component.scss']
})
export class TwofaRegistrationModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  copyCode() {
    this.activeModal.close();
    const verifyGoogleAuthModalRef = this.ngbModal.open(VerifyGoogleAuthModalComponent, { backdrop: 'static', centered: true, size: 'sm' });

    verifyGoogleAuthModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}

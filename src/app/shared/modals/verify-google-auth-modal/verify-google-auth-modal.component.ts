import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackupCodeModalComponent } from '../backup-code-modal/backup-code-modal.component';

@Component({
  selector: 'app-verify-google-auth-modal',
  templateUrl: './verify-google-auth-modal.component.html',
  styleUrls: ['./verify-google-auth-modal.component.scss']
})
export class VerifyGoogleAuthModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  enterCode() {
    this.activeModal.close();
    const backupCodeModalRef = this.ngbModal.open(BackupCodeModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-medium' });

    backupCodeModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}

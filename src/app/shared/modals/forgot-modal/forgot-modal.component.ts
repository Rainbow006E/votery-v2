import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailSentModalComponent } from '../email-sent-modal/email-sent-modal.component';

@Component({
  selector: 'app-forgot-modal',
  templateUrl: './forgot-modal.component.html',
  styleUrls: ['./forgot-modal.component.scss']
})
export class ForgotModalComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      email: new FormControl('', [Validators.requiredTrue, Validators.email])
    });
  }

  sentEmail() {
    this.activeModal.close();
    const emailSentModalRef = this.ngbModal.open(EmailSentModalComponent, { backdrop: 'static', centered: true, size: 'sm' });

    emailSentModalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}

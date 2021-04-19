import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TurnOffModalComponent } from 'app/shared/modals/turn-off-modal/turn-off-modal.component';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  @ViewChild('avatarInput', { static: false }) avatarInput: ElementRef;
  avatar: string = "";
  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    passportNumber: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    twofa: new FormControl(true, Validators.required),
    birthDate: new FormGroup({
      date: new FormControl('', [Validators.max(31), Validators.min(1), Validators.required]),
      month: new FormControl('', [Validators.max(12), Validators.min(1), Validators.required]),
      year: new FormControl('', Validators.required)
    }),
    bankName: new FormControl(''),
    IBAN: new FormControl(''),
    SWIFT: new FormControl(''),
    ewallet: new FormControl(''),
  });
  formSubmitted: boolean = false;

  constructor(
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  get lf() {
    return this.profileForm.controls;
  }

  // get bank() {
  //   // return this.lf.bankAccount;
  // }

  value(value: string) {
    return this.lf[value].value;
  }

  clickAvatar() {
    this.avatarInput.nativeElement.click()
  }

  uploadAvatar(event) {
    if (event.target.files && event.target.files[0]) {
      const avatar = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatar = e.target.result;
      };
      reader.readAsDataURL(avatar);
    }
  }

  submit() {
    this.formSubmitted = true;
    console.log('submit');
  }

  changeTwofa(e) {
    const checked = e.target.checked;
    if (!checked) {
      const turnOffModalRef = this.ngbModal.open(TurnOffModalComponent, { backdrop: 'static', centered: true, size: 'lg', windowClass: 'modal-custom-normal' });
      turnOffModalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    phone: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    passportNumber: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    twofa: new FormControl(true, Validators.required),
    birthDate: new FormGroup({
      date: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl('')
    }),
    bankAccount: new FormGroup({
      bankName: new FormControl(''),
      IBAN: new FormControl(''),
      SWIFT: new FormControl(''),
      ewallet: new FormControl(''),
    })
  });
  constructor() { }

  ngOnInit(): void {
  }

  get lf() {
    return this.profileForm.controls;
  }

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
}

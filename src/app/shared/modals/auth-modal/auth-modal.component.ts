import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  loginEye: string = 'password';

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    agree: new FormControl(false, [Validators.required, Validators.requiredTrue]),
    twofa: new FormControl(false)
  });
  registerEye: string = 'password';


  constructor(
    public activeModal: NgbActiveModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get lf() {
    return this.loginForm.controls;
  }

  toggleEye(type: string) {
    if (type === 'login') {
      if (this.loginEye === 'password') {
        this.loginEye = 'text';
      } else {
        this.loginEye = 'password';
      }
    } else if (type === 'register') {
      if (this.registerEye === 'password') {
        this.registerEye = 'text';
      } else {
        this.registerEye = 'password';
      }
    }
  }

  termsPricacy(e) {
    e.preventDefault();
  }

  login() {
    this.activeModal.close();
    this.router.navigateByUrl('/profile-settings');
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Header2Component } from './components/header2/header2.component';
import { AuthModalComponent } from './modals/auth-modal/auth-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterTopComponent } from './components/footer-top/footer-top.component';
import { FooterBottomComponent } from './components/footer-bottom/footer-bottom.component';
import { FooterGapComponent } from './components/footer-gap/footer-gap.component';
import { ForgotModalComponent } from './modals/forgot-modal/forgot-modal.component';
import { EmailSentModalComponent } from './modals/email-sent-modal/email-sent-modal.component';
import { TermsConditionsModalComponent } from './modals/terms-conditions-modal/terms-conditions-modal.component';
import { TwofaRegistrationModalComponent } from './modals/twofa-registration-modal/twofa-registration-modal.component';
import { VerifyGoogleAuthModalComponent } from './modals/verify-google-auth-modal/verify-google-auth-modal.component';
import { BackupCodeModalComponent } from './modals/backup-code-modal/backup-code-modal.component';
import { TwofaDoneModalComponent } from './modals/twofa-done-modal/twofa-done-modal.component';
import { TurnOffModalComponent } from './modals/turn-off-modal/turn-off-modal.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  exports: [
    MatInputModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FooterTopComponent,
    FooterBottomComponent,
    FooterGapComponent,
    Header2Component,
    AuthModalComponent,
    ForgotModalComponent,
    EmailSentModalComponent,
    TermsConditionsModalComponent,
    TwofaRegistrationModalComponent,
    VerifyGoogleAuthModalComponent,
    BackupCodeModalComponent,
    TwofaDoneModalComponent,
    TurnOffModalComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FooterTopComponent,
    FooterBottomComponent,
    FooterGapComponent,
    Header2Component,
    AuthModalComponent,
    ForgotModalComponent,
    EmailSentModalComponent,
    TermsConditionsModalComponent,
    TwofaRegistrationModalComponent,
    VerifyGoogleAuthModalComponent,
    BackupCodeModalComponent,
    TwofaDoneModalComponent,
    TurnOffModalComponent,
    PrivacyComponent
  ]
})
export class SharedModule { }

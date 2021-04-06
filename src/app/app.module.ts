import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PrivacyComponent } from './shared/components/privacy/privacy.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterTopComponent } from './shared/components/footer-top/footer-top.component';
import { FooterBottomComponent } from './shared/components/footer-bottom/footer-bottom.component';
import { FooterGapComponent } from './shared/components/footer-gap/footer-gap.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import { Header2Component } from './shared/components/header2/header2.component';
import { AuthModalComponent } from './shared/modals/auth-modal/auth-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { ForgotModalComponent } from './shared/modals/forgot-modal/forgot-modal.component';
import { EmailSentModalComponent } from './shared/modals/email-sent-modal/email-sent-modal.component';
import { TermsConditionsModalComponent } from './shared/modals/terms-conditions-modal/terms-conditions-modal.component';
import { TwofaRegistrationModalComponent } from './shared/modals/twofa-registration-modal/twofa-registration-modal.component';
import { VerifyGoogleAuthModalComponent } from './shared/modals/verify-google-auth-modal/verify-google-auth-modal.component';
import { BackupCodeModalComponent } from './shared/modals/backup-code-modal/backup-code-modal.component';
import { TwofaDoneModalComponent } from './shared/modals/twofa-done-modal/twofa-done-modal.component';
import { TurnOffModalComponent } from './shared/modals/turn-off-modal/turn-off-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        MainLayoutComponent,
        PrivacyComponent,
        HomeLayoutComponent,
        HeaderComponent,
        FooterTopComponent,
        FooterBottomComponent,
        FooterGapComponent,
        AuthenticatedLayoutComponent,
        Header2Component,
        AuthModalComponent,
        ForgotModalComponent,
        EmailSentModalComponent,
        TermsConditionsModalComponent,
        TwofaRegistrationModalComponent,
        VerifyGoogleAuthModalComponent,
        BackupCodeModalComponent,
        TwofaDoneModalComponent,
        TurnOffModalComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [
        NgbActiveModal
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        AuthModalComponent
    ]
})
export class AppModule { }

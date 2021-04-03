import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
        FooterGapComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

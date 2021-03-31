import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PrivacyComponent } from './shared/components/privacy/privacy.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        MainLayoutComponent,
        PrivacyComponent
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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';

import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { VoteryCoinComponent } from './pages/votery-coin/votery-coin.component';
import { SecondLayoutComponent } from './layouts/second-layout/second-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        AuthenticatedLayoutComponent,
        VoteryCoinComponent,
        SecondLayoutComponent,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [
        NgbActiveModal
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

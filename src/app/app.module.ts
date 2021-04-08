import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MainLayoutComponent,
        HomeLayoutComponent,
        AuthenticatedLayoutComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        BrowserModule,
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

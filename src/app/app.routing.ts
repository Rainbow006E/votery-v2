import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { IndexComponent } from './pages/index/index.component';
import { TemrsConditionsComponent } from './pages/temrs-conditions/temrs-conditions.component';

const routes: Routes =[
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: "",
        component: MainLayoutComponent,
        children: [
            {
                path: "index",
                component: IndexComponent
            },
            {
                path: "terms-conditions",
                component: TemrsConditionsComponent
            }
        ]
    },
    {
        path: "",
        component: HomeLayoutComponent,
        children: [
            {
                path: "home",
                loadChildren: './home/home.module#HomeModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

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
                loadChildren: './pages/pages.module#PagesModule'
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

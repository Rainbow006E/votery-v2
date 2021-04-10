import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: "",
        children: [
            {
                path: "",
                loadChildren: './pages/pages.module#PagesModule'
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

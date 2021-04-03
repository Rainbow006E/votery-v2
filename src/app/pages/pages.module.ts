import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { TemrsConditionsComponent } from './temrs-conditions/temrs-conditions.component';


@NgModule({
  declarations: [IndexComponent, TemrsConditionsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { TemrsConditionsComponent } from './temrs-conditions/temrs-conditions.component';
import { NewsComponent } from './news/news.component';
import { NewsArticleComponent } from './news-article/news-article.component';


@NgModule({
  declarations: [IndexComponent, TemrsConditionsComponent, NewsComponent, NewsArticleComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

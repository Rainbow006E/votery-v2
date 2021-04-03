import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { IndexComponent } from './index/index.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsComponent } from './news/news.component';
import { TemrsConditionsComponent } from './temrs-conditions/temrs-conditions.component';

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "terms-conditions",
    component: TemrsConditionsComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "news-article",
    component: NewsArticleComponent
  },
  {
    path: "contacts",
    component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { TemrsConditionsComponent } from './temrs-conditions/temrs-conditions.component';
import { NewsComponent } from './news/news.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import { StatementComponent } from './statement/statement.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    IndexComponent,
    TemrsConditionsComponent,
    NewsComponent,
    NewsArticleComponent,
    ContactsComponent,
    ProfileSettingsComponent,
    HistoryComponent,
    StatementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    NgbModule
  ]
})
export class PagesModule { }

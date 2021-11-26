import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedLayoutComponent } from 'app/layouts/authenticated-layout/authenticated-layout.component';
import { MainLayoutComponent } from 'app/layouts/main-layout/main-layout.component';
import { SecondLayoutComponent } from 'app/layouts/second-layout/second-layout.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HistoryComponent } from './history/history.component';
import { IndexComponent } from './index/index.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsComponent } from './news/news.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { StatementComponent } from './statement/statement.component';
import { TemrsConditionsComponent } from './temrs-conditions/temrs-conditions.component';
import { VoteryCoinComponent } from './votery-coin/votery-coin.component';

const routes: Routes = [
  /** Main Layout */
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
    ]
  },
  /** Authenticated Layout */
  {
    path: "",
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: "profile-settings",
        component: ProfileSettingsComponent
      },
      {
        path: "history",
        component: HistoryComponent
      },
      {
        path: "balance-statement",
        component: StatementComponent
      }
    ]
  },
  {
    path: "",
    component: SecondLayoutComponent,
    children: [
      {
        path: "votery-coin",
        component: VoteryCoinComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

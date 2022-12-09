import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {MessagePageComponent} from "./message-page/message-page.component";
import {NewsPageComponent} from "./news-page/news-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {UserTableComponent} from "./user-table/user-table.component";
import {AdministrationNewsPageComponent} from "./administration-news-page/administration-news-page.component";
import {AdministratorGuard} from "./shared/classes/administrator.guard";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
    ]
  },
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: 'message/:id', component: MessagePageComponent, canActivate: [AuthGuard]},
      {path: 'news/:id', component: NewsPageComponent, canActivate: [AuthGuard]},
      {path: 'administration', component: UserTableComponent, canActivate: [AuthGuard, AdministratorGuard], children: [

        ]},
      {path: 'administration/:id', component: AdministrationNewsPageComponent, canActivate: [AuthGuard, AdministratorGuard]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

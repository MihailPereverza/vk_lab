import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserTableRoleComponent } from './user-table/user-table-role/user-table-role.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserTableStatusComponent } from './user-table/user-table-status/user-table-status.component';
import {MatSelectModule} from "@angular/material/select";
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MessagePageComponent } from './message-page/message-page.component';
import {MatListModule} from "@angular/material/list";
import { NewsPageComponent } from './news-page/news-page.component';
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import { AdministrationNewsPageComponent } from './administration-news-page/administration-news-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserTableRoleComponent,
    UserTableStatusComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MessagePageComponent,
    NewsPageComponent,
    AdministrationNewsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

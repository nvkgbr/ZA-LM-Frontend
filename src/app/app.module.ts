import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { RentsComponent } from './components/rents/rents.component';
import { RentersComponent } from './components/renters/renters.component';
import { LogsComponent } from './components/logs/logs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CreateRentsComponent } from './components/rents/create-rents/create-rents.component';

registerLocaleData(en);

@NgModule({
	declarations: [AppComponent, NavbarComponent, BooksComponent, RentsComponent, RentersComponent, LogsComponent, CreateRentsComponent],
	providers: [{ provide: NZ_I18N, useValue: en_US }],
	bootstrap: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, FormsModule, BrowserAnimationsModule, NzModalModule]
})
export class AppModule {}

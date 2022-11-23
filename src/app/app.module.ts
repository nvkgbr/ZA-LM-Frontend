import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { RentsComponent } from './components/rents/rents.component';
import { RentersComponent } from './components/renters/renters.component';
import { LogsComponent } from './components/logs/logs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksSearchComponent } from './components/books/books-search/books-search.component';
import { RenterSearchComponent } from './components/renters/renter-search/renter-search.component';
import { RentsSearchComponent } from './components/rents/rents-search/rents-search.component';

@NgModule({
	declarations: [AppComponent, NavbarComponent, BooksComponent, RentsComponent, RentersComponent, LogsComponent, BooksSearchComponent, RenterSearchComponent, RentsSearchComponent],
	providers: [],
	bootstrap: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgenciesComponent } from './pages/agencies/agencies.component';
import { ListAgenciesComponent } from './components/list-agencies/list-agencies.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapAgenciesComponent } from './components/map-agencies/map-agencies.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    ListAgenciesComponent,
    HeaderComponent,
    FooterComponent,
    MapAgenciesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

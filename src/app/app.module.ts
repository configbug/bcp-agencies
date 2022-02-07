import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxJdenticonModule } from 'ngx-jdenticon';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgenciesComponent } from './pages/agencies/agencies.component';
import { ListAgenciesComponent } from './components/list-agencies/list-agencies.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapAgenciesComponent } from './components/map-agencies/map-agencies.component';

import { SplashComponent } from './core/components/splash/splash.component';
import { SplashScreenStateService } from './core/services/splash-screen-state.service';

@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    ListAgenciesComponent,
    HeaderComponent,
    FooterComponent,
    MapAgenciesComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    NgxJdenticonModule,
    GoogleMapsModule,

    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    SplashScreenStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

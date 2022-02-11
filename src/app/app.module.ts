import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxJdenticonModule } from 'ngx-jdenticon';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgenciesComponent } from './pages/agencies/agencies.component';
import { ListAgenciesComponent } from './components/list-agencies/list-agencies.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapAgenciesComponent } from './components/map-agencies/map-agencies.component';

import { AgencieDetailComponent } from './pages/agencies/agencie-detail/agencie-detail.component';
import { AgencieMapComponent } from './pages/agencies/agencie-map/agencie-map.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    ListAgenciesComponent,
    HeaderComponent,
    FooterComponent,
    MapAgenciesComponent,
    AgencieDetailComponent,
    AgencieMapComponent
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
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

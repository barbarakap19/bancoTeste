import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';


import { BuscaAvancadaComponent } from './busca-avancada/busca-avancada.component';

import {MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule} from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BuscaAvancadaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

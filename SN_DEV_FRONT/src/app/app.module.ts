import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AbonneComponent } from './components/abonne/abonne.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAbonneComponent } from './components/add-abonne/add-abonne.component';
import { EditAbonneComponent } from './components/edit-abonne/edit-abonne.component';
import { FormAbonneComponent } from './components/form-abonne/form-abonne.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AbonneComponent,
    AddAbonneComponent,
    EditAbonneComponent,
    FormAbonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleHttpComponent } from './example-http/example-http.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpWithPromissesComponent } from './http-with-promisses/http-with-promisses.component';
import { HttpWithObservablesComponent } from './http-with-observables/http-with-observables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExampleHttpComponent,
    HttpWithPromissesComponent,
    HttpWithObservablesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

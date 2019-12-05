import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleHttpComponent } from './example-http/example-http.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpWithPromissesComponent } from './http-with-promisses/http-with-promisses.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleHttpComponent,
    HttpWithPromissesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

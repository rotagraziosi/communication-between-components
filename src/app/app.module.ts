import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectModule } from './direct/direct.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

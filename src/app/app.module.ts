import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectModule } from './direct/direct.module';
import { IndirectModule } from './indirect/indirect.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectModule,
    IndirectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

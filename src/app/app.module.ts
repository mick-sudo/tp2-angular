import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HourComponent } from './hour/hour.component';
import { HourParentComponent } from './hour-parent/hour-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HourComponent,
    HourParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameboardModule} from "./modules/gameboard/gameboard.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [GameboardModule]
})
export class AppModule { }

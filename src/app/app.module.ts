import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {CoreModule} from "./core/core.module";
import {PublicModule} from './public/public.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    PublicModule,
    ReactiveFormsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

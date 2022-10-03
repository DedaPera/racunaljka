import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MosquitoNet } from './mosquitoNet/mosquitoNet.component';
import { SunShader } from './sunShader/sunShader.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    WinComponent,
    SunShader,
    MosquitoNet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

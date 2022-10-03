import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MosquitoNet } from './mosquitoNet/mosquitoNet.component';
import { ApprovalBtnComponent } from './shared/approvalBtn.component';
import { SunShader } from './sunShader/sunShader.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovalBtnComponent,
    WinComponent,
    SunShader,
    MosquitoNet,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

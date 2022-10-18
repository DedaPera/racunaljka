import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddView } from './addView/addView.componet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MosquitoNet } from './mosquitoNet/mosquitoNet.component';
import { ApprovalBtnComponent } from './shared/approvalBtn.component';
import { RadioSection } from './shared/radioSection/radioSection.component';
import { SizeInput } from './shared/sizeInput/sizeInput.compopnent';
import { SunShader } from './sunShader/sunShader.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovalBtnComponent,
    SizeInput,
    RadioSection,
    WinComponent,
    SunShader,
    MosquitoNet,
    AddView
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

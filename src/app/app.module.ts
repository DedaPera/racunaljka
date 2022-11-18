import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddView } from './addView/add-view.componet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSettings } from './appSettings/app-settings.component';
import { MosquitoNet } from './mosquitoNet/mosquito-net.component';
import { ApprovalBtnComponent } from './shared/approval-button.component';
import { OnlyNumberDirective } from './shared/only-number-directive';
import { RadioSection } from './shared/radioSection/radio-section.component';
import { SizeInput } from './shared/sizeInput/size-input.compopnent';
import { SunShader } from './sunShader/sun-shader.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovalBtnComponent,
    SizeInput,
    OnlyNumberDirective,
    RadioSection,
    WinComponent,
    SunShader,
    MosquitoNet,
    AddView,
    AppSettings,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent },
      { path: 'settings', component: AppSettings },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

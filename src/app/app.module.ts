import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AddbannerComponent } from './addbanner/addbanner.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppDirective } from './app.directive';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AddbannerComponent,
    FirstComponent,
    SecondComponent,
    AppDirective,
    CustomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

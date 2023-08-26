import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { SharedModule } from './Reusable/shared/shared.module';
import { Modal1Component } from './Components/layout/Pages/modal1/modal1.component';
import { Modal2Component } from './Components/layout/Pages/modal2/modal2.component';
import { Modal3Component } from './Components/layout/Pages/modal3/modal3.component';
import { Modal4Component } from './Components/layout/Pages/modal4/modal4.component';
import { KpisComponent } from './Components/layout/Pages/kpis/kpis.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    Modal1Component,
    Modal2Component,
    Modal3Component,
    Modal4Component,
    KpisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

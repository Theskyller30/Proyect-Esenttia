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
import { VehiculosComponent } from './Components/layout/Pages/vehiculos/vehiculos.component';
import { PatioComponent } from './Components/layout/Pages/patio/patio.component';
import { OperacionesComponent } from './Components/layout/Pages/operaciones/operaciones.component';
import { ComunicacionComponent } from './Components/layout/Pages/comunicacion/comunicacion.component';
import { Modal5Component } from './Components/layout/Pages/modal5/modal5.component';
import { DocumentosComponent } from './Components/layout/Pages/documentos/documentos.component';
import { SeguridadComponent } from './Components/layout/Pages/seguridad/seguridad.component';
import { TransporteComponent } from './Components/layout/Pages/transporte/transporte.component';
import { HseComponent } from './Components/layout/Pages/hse/hse.component';
import { CediComponent } from './Components/layout/Pages/cedi/cedi.component';
import { SfisicaComponent } from './Components/layout/Pages/sfisica/sfisica.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    Modal1Component,
    Modal2Component,
    Modal3Component,
    Modal4Component,
    KpisComponent,
    VehiculosComponent,
    PatioComponent,
    OperacionesComponent,
    ComunicacionComponent,
    Modal5Component,
    DocumentosComponent,
    SeguridadComponent,
    TransporteComponent,
    HseComponent,
    CediComponent,
    SfisicaComponent
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

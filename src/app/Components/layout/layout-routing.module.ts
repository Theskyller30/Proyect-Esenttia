import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { VentaComponent } from './Pages/venta/venta.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { HistorialVentaComponent } from './Pages/historial-venta/historial-venta.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';
import { Modal1Component } from './Pages/modal1/modal1.component';
import { Modal2Component } from './Pages/modal2/modal2.component';
import { Modal3Component } from './Pages/modal3/modal3.component';
import { Modal4Component } from './Pages/modal4/modal4.component';
import { KpisComponent } from './Pages/kpis/kpis.component';
import { VehiculosComponent } from './Pages/vehiculos/vehiculos.component';
import { PatioComponent } from './Pages/patio/patio.component';
import { OperacionesComponent } from './Pages/operaciones/operaciones.component';
import { Modal5Component } from './Pages/modal5/modal5.component';
import { ComunicacionComponent } from './Pages/comunicacion/comunicacion.component';
import { DocumentosComponent } from './Pages/documentos/documentos.component';
import { SeguridadComponent } from './Pages/seguridad/seguridad.component';
import { TransporteComponent } from './Pages/transporte/transporte.component';
import { HseComponent } from './Pages/hse/hse.component';
import { CediComponent } from './Pages/cedi/cedi.component';
import { SfisicaComponent } from './Pages/sfisica/sfisica.component';
import { InvbodegasComponent } from './Pages/invbodegas/invbodegas.component';
import { AnticipadoComponent } from './Pages/anticipado/anticipado.component';
import { TimportacionComponent } from './Pages/timportacion/timportacion.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashBoardComponent,
      },
      {
        path: 'timportacion',
        component: TimportacionComponent,
      },
      {
        path: 'anticipado',
        component: AnticipadoComponent,
      },
      {
        path: 'invbodega',
        component: InvbodegasComponent,
      },
      {
        path: 'sfisica',
        component: SfisicaComponent,
      },
      {
        path: 'cedi',
        component: CediComponent,
      },
      {
        path: 'hse',
        component: HseComponent,
      },
      {
        path: 'transporte',
        component: TransporteComponent,
      },
      {
        path: 'seguridad',
        component: SeguridadComponent,
      },
      {
        path: 'documentos',
        component: DocumentosComponent,
      },
      {
        path: 'comunicaciones',
        component: ComunicacionComponent,
      },
      {
        path: 'operaciones',
        component: OperacionesComponent,
      },
      {
        path: 'patio',
        component: PatioComponent,
      },
      {
        path: 'vehiculos',
        component: VehiculosComponent,
      },
      {
        path: 'kpis',
        component: KpisComponent,
      },
      {
        path: 'modal1',
        component: Modal1Component,
      },
      {
        path: 'modal5',
        component: Modal5Component,
      },
      {
        path: 'modal2',
        component: Modal2Component,
      },
      {
        path: 'modal3',
        component: Modal3Component,
      },
      {
        path: 'modal4',
        component: Modal4Component,
      },
      {
        path: 'usuarios',
        component: UsuarioComponent,
      },
      {
        path: 'venta',
        component: VentaComponent,
      },
      {
        path: 'productos',
        component: ProductoComponent,
      },
      {
        path: 'historial_venta',
        component: HistorialVentaComponent,
      },
      {
        path: 'reportes',
        component: ReporteComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

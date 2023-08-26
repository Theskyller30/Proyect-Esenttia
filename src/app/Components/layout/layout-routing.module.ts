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
        path: 'kpis',
        component: KpisComponent,
      },
      {
        path: 'modal1',
        component: Modal1Component,
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

import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})


export class LayoutComponent 
{

  constructor(private _cargarScripts:CargarScriptsService ){
    _cargarScripts.cargar(["assent/js/scriptside"])
  }

}

import { Component } from '@angular/core';
import { VolverService } from '../volverservices.service';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {

  constructor(private volverService: VolverService){}

  volverPpal() {
    this.volverService.volver();
  }

}

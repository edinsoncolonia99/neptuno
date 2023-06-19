import { Component, OnInit } from '@angular/core';
import { VolverService } from '../../../core/services/volverservices.service';


@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.css']
})
export class IndicadorComponent implements OnInit {

  constructor(private volverService: VolverService){

  }

  volverPpal(){
    this.volverService.volver();
  }

  ngOnInit(): void {
      
  }
  
}

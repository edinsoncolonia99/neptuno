import { Component, OnInit } from '@angular/core';
import { VolverService } from '../volverservices.service';

@Component({
  selector: 'app-operativo',
  templateUrl: './operativo.component.html',
  styleUrls: ['./operativo.component.css']
})
export class OperativoComponent implements OnInit{

  constructor(private volverService: VolverService){

  }

  ngOnInit(): void {
      
  }


  volverPpal() {
    this.volverService.volver();
  }

}

import { Component, OnInit } from '@angular/core';
import { VolverService } from '../../../../core/services/volverservices.service';
import { ObjetoModelo } from '../../../../core/models/baseventa.model';
import { BaseventaService } from '../../../../core/services/baseventa.service';


@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.component.html',
  styleUrls: ['./reportlist.component.css']
})
export class ReportlistComponent implements OnInit{
  
  public objetoModelo:ObjetoModelo[]=[]; 

  constructor(public volverService: VolverService,
    public baseventaService: BaseventaService){}


  volverPpal(){
    this.volverService.volver();
  }

  ngOnInit(): void {
      this.objetoModelo = this.baseventaService.getContacts();
  }
  
}

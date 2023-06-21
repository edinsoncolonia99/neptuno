import { Component } from '@angular/core';
import { VolverService } from '../../../../core/services/volverservices.service';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.component.html',
  styleUrls: ['./reportlist.component.css']
})
export class ReportlistComponent {

  constructor(public volverService: VolverService){

  }

  volverPpal(){
    this.volverService.volver();
  }

  ngOnInit(): void {
      
  }
  
}

import { Component } from '@angular/core';
import { VolverService } from '../../../../core/services/volverservices.service';

@Component({
  selector: 'app-reportdetail',
  templateUrl: './reportdetail.component.html',
  styleUrls: ['./reportdetail.component.css']
})
export class ReportdetailComponent {


  constructor(public volverService: VolverService,){}

  volverPpal(){
    this.volverService.volver();
  }

}

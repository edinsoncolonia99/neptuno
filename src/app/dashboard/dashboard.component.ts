import { Component, OnInit } from '@angular/core';
import { VolverService } from '../volverservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private volserService : VolverService){

  }

  ngOnInit(): void {
      
  }

  volverPpal() {
    this.volserService.volver();
  }


}

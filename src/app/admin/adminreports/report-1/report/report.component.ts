import { Component, Input, OnInit } from '@angular/core';
import { ObjetoModelo } from '../../../../core/models/baseventa.model'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  @Input()
  report!: ObjetoModelo;
  
  constructor(){

  }

  ngOnInit(): void {
      
  }
  
  
}

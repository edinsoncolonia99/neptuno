import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolverService } from '../volverservices.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  constructor(private router:Router, private volverService:VolverService){

  }

  volver(){
    this.router.navigate(['/menuppal']);
  }


  ngOnInit(): void {
      
  }
}

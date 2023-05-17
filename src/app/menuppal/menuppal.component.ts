import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuppal',
  templateUrl: './menuppal.component.html',
  styleUrls: ['./menuppal.component.css']
})
export class MenuppalComponent implements OnInit {

  constructor(private router: Router){

  }
  redirectToLogin() {
    this.router.navigate(['/login']);
    
  }

  showMessage() {
    alert('Se debe iniciar sesión');
  }

  ngOnInit(): void{

  }
}

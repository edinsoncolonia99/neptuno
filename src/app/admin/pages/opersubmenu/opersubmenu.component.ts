import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolverService } from '../../../core/services/volverservices.service';


@Component({
  selector: 'app-opersubmenu',
  templateUrl: './opersubmenu.component.html',
  styleUrls: ['./opersubmenu.component.css']
})

export class OpersubmenuComponent{

  showSubMenu = false;

  constructor(private router: Router, private volverService: VolverService){}


  volverPpal() {
    this.volverService.volver();
  }

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }

  menuCrearUsuario(){
    this.router.navigate(['/usuarios']);
  }
}

import { Component } from '@angular/core';
import { LoginPpal} from '../login.model'
import { VolverService } from '../volverservices.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginppal:LoginPpal[] = [];

  constructor(public volverService:VolverService,
              public usuarioService:UsuarioService,
              public router:Router){

  }
public username: string | undefined;
password: string | undefined;


  volverPpal() {
    this.volverService.volver();
  }

  ingresar(){
    this.router.navigate(['/menuppal', this.username]);
  }

  onSubmit() {
    // Listo para armar un API
    console.log('Username: ' + this.usuarioService.username);
    console.log('Password: ' + this.password);
    this.usuarioService.setUsername(this.username || '');
  }
}

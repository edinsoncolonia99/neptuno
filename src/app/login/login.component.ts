import { Component } from '@angular/core';
import { LoginPpal} from '../core/models/login.model'
import { VolverService } from '../core/services/volverservices.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../core/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginppal:LoginPpal[] = [];
  public username: string | undefined;
  public password: string | undefined;

  constructor(public volverService:VolverService,
              public usuarioService:UsuarioService,
              public router:Router
            ){}

  volverPpal() {
    this.volverService.volver();
  }

  ingresar() {
    
  }

  onSubmit() {
    // Listo para armar un API
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    this.router.navigate(['/menuppal']);
}
}

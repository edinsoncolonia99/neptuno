import { Component, Input } from '@angular/core';
import { LoginPpal, UsuarioTipo} from '../login.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginppal:LoginPpal[] = [];

  constructor(){

  }
  username: string | undefined;
  password: string | undefined;

  onSubmit() {
    // Listo para armar un API
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }
}

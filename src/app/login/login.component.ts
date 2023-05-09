import { Component, Input } from '@angular/core';

import { loginPpal } from '../login.modelo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public model:loginPpal = new loginPpal('a', 'b');

  username: string | undefined;
  password: string | undefined;

  onSubmit() {
    // Aquí puedes hacer la validación del login y password
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }
}

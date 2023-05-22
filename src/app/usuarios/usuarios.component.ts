import { Component, OnInit } from '@angular/core';
import { LoginPpal } from '../login.model';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(
    public usuarioService:UsuarioService,
    private router: Router,
    private snackBar: MatSnackBar){}

  private LoginPpal:LoginPpal[] = [];
  username:string | undefined;
  password:string | undefined;
  passwordConfirm: string |undefined;
  email:string | undefined;
  usuarioSeleccion:string | undefined;
  tiendaAsociada:string | undefined;
  usuario: any ={};

  crearUsuario(): void {
    if (!this.username || !this.password || !this.passwordConfirm || !this.email || !this.usuarioSeleccion) {
      // Mostrar mensaje de error
      this.snackBar.open('Todos los campos son obligatorios', 'Cerrar', {
        duration: 3000,
        panelClass: 'error-snackbar' // Estilo personalizado para el mensaje de error
      });
      return;
    }

    this.usuario = {
      username: this.username,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      email: this.email,
      tipoUsuario: this.usuarioSeleccion
    };
    
    // metodo para insertar en la base.
    console.log('objeto', this.usuario );
  }

  volverAtras(){
  }

  ngOnInit(): void {
      
  }
}

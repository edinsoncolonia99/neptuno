import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
    // Lógica para cerrar la sesión y redirigir al usuario a la página de inicio de sesión
    // Aquí puedes llamar a un servicio de autenticación para cerrar la sesión del usuario
    // y luego redirigir al usuario a la página de inicio de sesión

    // Ejemplo de redireccionamiento a la página de inicio de sesión
    window.location.href = '/login';
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service'


@Component({
  selector: 'app-menuppal',
  templateUrl: './menuppal.component.html',
  styleUrls: ['./menuppal.component.css']
})
export class MenuppalComponent implements OnInit {
  public username: string | null | undefined;
  
  constructor(private router: Router,
              public usuarioService: UsuarioService,
              private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    };
  


   redirectToLogin() {
    this.router.navigate(['/login']);
    
  }


  showMessage() {
    alert('Se debe iniciar sesión');
  }


}

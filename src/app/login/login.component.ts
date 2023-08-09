import { Component, OnInit } from '@angular/core';
import { VolverService } from '../core/services/volverservices.service';
import { AuthService } from '../core/services/auth.service'
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = this.fb.group({
    username:[''],
    password:['']
  });

  constructor(
    public volverService:VolverService,
    private authSvc: AuthService,
    private fb: FormBuilder,
    private router: Router
    ){}

  
  ngOnInit(): void {
    const userData = {
      username: 'ecolonia',
      password: 'Ecolonia*123'
    };
    this.authSvc.login(userData).subscribe((res) =>console.log('login') )
  }

  onLogin():void {
    const formValue = this.loginForm.value;
    this.authSvc.login(formValue).subscribe((res) => {
      if(res){
        this.router.navigate(['']);
      }
    });
  }


//volverPpal() {
//  this.volverService.volver();
//}

}

import { Injectable } from '@angular/core';
import { LoginPpal } from '../models/login.model'

@Injectable({
    providedIn: 'root'
})

export class UsuarioService{
    public username: string | undefined;
    
    constructor(){}
    setUsername(username: string) {
        this.username = username;
      }
      
    getUsers(){
        return[
            new LoginPpal('edi', 'edi@colonia.com')
        ]       
    }
}
import { Injectable } from '@angular/core';
import {LoginPpal, UsuarioTipo} from '../login.model'

@Injectable({
    providedIn: 'root'
})

export class UsuarioService{

    constructor(){}

    getUsers(){
        return[
            new LoginPpal('edi', 'edi@colonia.com')
        ]

        
    }
}
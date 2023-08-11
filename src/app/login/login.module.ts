import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { LoginComponent } from './login.component'; 
import { Material2Module } from '../material2/material2.module';
import { LoginRoutingModule } from './login-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [LoginComponent],
    imports:[
        CommonModule, 
        LoginRoutingModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        Material2Module,
        ReactiveFormsModule,
        MatButtonModule
    ],
})
export class LoginModule {}
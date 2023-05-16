import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';



import { NotFoundComponent } from './not-found/not-found.component';


import { AcercaComponent} from './acerca/acerca.component';
import { IndicadorComponent } from './indicador/indicador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent} from './usuarios/usuarios.component';
import { ResumenComponent} from './resumen/resumen.component';
import { ReporventaComponent } from './reporventa/reporventa.component';
import { environment } from 'src/environment/environment';




const appRoutes: Routes = [
  
  {path: 'login', component:LoginComponent},
  {path: 'acerca', component:AcercaComponent},
  {path: 'indicador', component:IndicadorComponent},
  {path: 'reporteventa', component:ReporventaComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'resumen', component:ResumenComponent},
  {path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
  {path: '**' , component:NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    AcercaComponent,
    IndicadorComponent,
    DashboardComponent,
    UsuariosComponent,
    ResumenComponent,
    ReporventaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { NotFoundComponent } from './not-found/not-found.component';


import { AcercaComponent} from './acerca/acerca.component';
import { IndicadorComponent } from './indicador/indicador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent} from './usuarios/usuarios.component';
import { ResumenComponent} from './resumen/resumen.component';


const appRoutes: Routes = [
  
  {path: 'login', component:LoginComponent},
  {path: 'acerca', component:AcercaComponent},
  {path: 'indicador', component:IndicadorComponent},
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
    ResumenComponent
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
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuppalComponent } from '../app/home/menuppal/menuppal.component';
import { LoginComponent} from '../app/login/login.component';
import { ReportlistComponent } from '../app/admin/adminreports/report-1/reportlist/reportlist.component';
import { ReporventaComponent} from '../app/admin/pages/reporventa/reporventa.component';
import { ResumenComponent} from '../app/admin/pages/resumen/resumen.component';
import { UsuariosComponent } from '../app/admin/pages/usuarios/usuarios.component';
import { OpersubmenuComponent } from '../app/admin/pages/opersubmenu/opersubmenu.component';
import { VentaoperativaComponent } from '../app/admin/pages/ventaoperativa/ventaoperativa.component';
import { NotFoundComponent } from '../app/home/not-found/not-found.component';
import { ReportComponent } from '../app/admin/adminreports/report-1/report/report.component';


const appRoutes: Routes = [
  {path: 'menuppal', component:MenuppalComponent},
  {path: 'login', component:LoginComponent},
  {path: 'indicador', component:ReportlistComponent},
  {path: 'temporal', component:ReportComponent},
  {path: 'reporteventa', component:ReporventaComponent},
  {path: 'resumen', component:ResumenComponent}, 
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'opersubmenu', component:OpersubmenuComponent},
  {path: 'resultado', component:VentaoperativaComponent}, //trasladar a ResulventaCom..
  {path: '',
  redirectTo: '/menuppal',
  pathMatch: 'full'
},
  {path: '**' , component:NotFoundComponent}
];



@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports:[
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ], 
  exports: [
    RouterModule]
})
export class AppRoutingModule { }

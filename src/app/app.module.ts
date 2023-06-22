import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/layaout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { IndicadorComponent } from './admin/pages/indicador/indicador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent} from './admin/pages/usuarios/usuarios.component';
import { ResumenComponent} from './admin/pages/resumen/resumen.component';
import { ReporventaComponent } from './admin/pages/reporventa/reporventa.component';
import { MenuppalComponent } from './home/menuppal/menuppal.component';
import { VolverService } from './core/services/volverservices.service';
import { OpersubmenuComponent } from './admin/pages/opersubmenu/opersubmenu.component';
import { LoginComponent } from './login/login.component';
import { VentaoperativaComponent } from './admin/pages/ventaoperativa/ventaoperativa.component';
import { ObjetoModelo } from './core/models/baseventa.model';
import { UsuarioService } from './core/services/usuario.service';
import { AppRoutingModule } from '../app/app-routing.module';
import { ReportlistComponent } from './admin/adminreports/report-1/reportlist/reportlist.component';
import { ReportdetailComponent } from './admin/adminreports/report-1/reportdetail/reportdetail.component';
import { ReportComponent } from './admin/adminreports/report-1/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    IndicadorComponent,
    DashboardComponent,
    UsuariosComponent,
    ResumenComponent,
    ReporventaComponent,
    MenuppalComponent,
    OpersubmenuComponent,
    VentaoperativaComponent,
    ReportlistComponent,
    ReportdetailComponent,
    ReportComponent,

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
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [VolverService, UsuarioService, LoginComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }

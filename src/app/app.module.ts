import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layaout/header/header.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { IndicadorComponent } from './admin/pages/indicador/indicador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResumenComponent} from './admin/pages/resumen/resumen.component';
import { ReporventaComponent } from './admin/pages/reporventa/reporventa.component';
import { MenuppalComponent } from './home/menuppal/menuppal.component';
import { VolverService } from './core/services/volverservices.service';
import { OpersubmenuComponent } from './admin/pages/opersubmenu/opersubmenu.component';
import { VentaoperativaComponent } from './admin/pages/ventaoperativa/ventaoperativa.component';
import { AppRoutingModule } from './app-routing.module'
import { ReportlistComponent } from './admin/adminreports/report-1/reportlist/reportlist.component';
import { ReportdetailComponent } from './admin/adminreports/report-1/reportdetail/reportdetail.component';
import { ReportComponent } from './admin/adminreports/report-1/report/report.component';
import { Material2Module } from './material2/material2.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule} from '../app/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    IndicadorComponent,
    DashboardComponent,
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
    AppRoutingModule,
    HttpClientModule,
    Material2Module,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    LoginModule,
  ],
  providers: [VolverService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

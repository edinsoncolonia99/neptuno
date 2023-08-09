import { Component, OnInit, HostListener } from '@angular/core';
import { BaseventaService } from '../../../core/services/baseventa.service';
import { ObjetoModelo } from '../../../core/models/baseventa.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventaoperativa',
  templateUrl: './ventaoperativa.component.html',
  styleUrls: ['./ventaoperativa.component.css']
})
export class VentaoperativaComponent implements OnInit {


  objetoModeloList : ObjetoModelo[] = [];
  consultaForm: FormGroup;
  public fijarHeader: boolean = true;

  constructor(private baseventaService: BaseventaService,
              private formBuilder: FormBuilder,
              private router:Router)
            {
              this.consultaForm = this.formBuilder.group({
              fechaInicial: [''],
              fechaFinal:[''],
              codigoTienda: []  
     }); 
    }
    /*
    @HostListener('window:scroll', ['event'])
    private handScroll($event:Event){
      if(($event.target as HTMLElement).children[0].scrollTop > 20 && 
      !this.fijarHeader){
        this.fijarHeader = true;
      }
      else if(($event.target as HTMLElement).children[0].scrollTop <= 20 &&
      !this.fijarHeader) {
       this.fijarHeader = false; 
      }
    } */
  ngOnInit(): void {
     // this.consultarDatos();
  }

  volverAtras(){
    this.router.navigate(['/reporteventa']);
  }

  eliminar(){

  }


  consultarDatos() {
    const fechaInicial = this.consultaForm.get('fechaInicial')?.value;
    const fechaFinal = this.consultaForm.get('fechaFinal')?.value;
    const codigoTienda = this.consultaForm.get('codigoTienda')?.value;

    this.objetoModeloList = this.baseventaService.getContacts().filter((objeto: ObjetoModelo) => {
      return (
        (fechaInicial ? objeto.fecha >= fechaInicial : true) &&
        (fechaFinal ? objeto.fecha <= fechaFinal : true) &&
        (codigoTienda ? objeto.codigo === codigoTienda : true)
      );
    });
}
}

import { Component, OnInit } from '@angular/core';
import { ObjetoModelo } from '../baseventa.model';
import { BaseventaService } from '../baseventa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resulventa',
  templateUrl: './resulventa.component.html',
  styleUrls: ['./resulventa.component.css']
})
export class ResulventaComponent implements OnInit {
  public baseventa: ObjetoModelo[] = [];
  public ventapromedio: number = 0;
  public unidadpromedio: number = 0;
  public preciopromedio: number = 0;
  public totalVentas: number = 0;
  public totalunidades: number = 0;
  public totalFacturas: number = 0;
  public startDateInput: string = ''; // Variable para almacenar la fecha inicial seleccionada
  public endDateInput: string = ''; // Variable para almacenar la fecha final seleccionada

  constructor(public baseventaService: BaseventaService, private router:Router) {}

  ngOnInit(): void {
    this.baseventa = this.baseventaService.getContacts();
    this.calcularIndicadores();
  }



  consultar(): void {
    console.log('Fecha inicial:', this.startDateInput);
    console.log('Fecha final:', this.endDateInput);
  }

  calcularIndicadores() {
    if (this.baseventa.length > 0) {
      let totalVentas = 0;
      let totalFacturas = 0;
      let totalunidades = 0;

      for (let venta of this.baseventa) {
        totalVentas += venta.ventas;
        totalFacturas += venta.facturas;
        totalunidades += venta.unidades;
      }

      if (totalFacturas !== 0) {
        this.ventapromedio = totalVentas / totalFacturas;
        this.unidadpromedio = totalunidades / totalFacturas;
        this.preciopromedio = totalVentas / totalunidades;
        this.totalVentas = totalVentas;
        this.totalunidades = totalunidades;
        this.totalFacturas = totalFacturas;
      }
    }
  }
}

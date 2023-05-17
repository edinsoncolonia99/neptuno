import { Component, OnInit } from '@angular/core';
import { ObjetoModelo } from '../baseventa.model';
import { BaseventaService } from '../baseventa.service';

@Component({
  selector: 'app-resulventa',
  templateUrl: './resulventa.component.html',
  styleUrls: ['./resulventa.component.css']
})
export class ResulventaComponent implements OnInit {
  public baseventa: ObjetoModelo[] = [];
  public ventapromedio: number = 0; // Variable para almacenar el cálculo ventapromedio
  public unidadpromedio: number = 0; // Variable para almacenar el cálculo unidadpromedio
  public preciopromedio: number = 0; // Variable para almacenar el cálculo facturapromedio

  constructor(public baseventaService: BaseventaService) {}

  ngOnInit(): void {
    this.baseventa = this.baseventaService.getContacts();
    this.calcularIndicadores();
    
  }

  consultar() {
    // Lógica para realizar la consulta adicional
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
        this.unidadpromedio = totalunidades / totalFacturas
        this.preciopromedio = totalVentas / totalunidades
      }
    }
  }

  

}


import { Component, OnInit } from '@angular/core';
import { ObjetoModelo } from '../baseventa.model';
import { BaseventaService } from '../baseventa.service';
import { Router } from '@angular/router';
import { VolverService } from '../volverservices.service';

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
  public view: [number, number] = [700, 400];
  public gradient: boolean = true;
  public showLegend: boolean = true;
  public showLabels: boolean = true;
  public isDoughnut: boolean = false;
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    public baseventaService: BaseventaService,
    private router: Router,
    private volverService: VolverService
  ) {}

  ngOnInit(): void {
    this.baseventa = this.baseventaService.getContacts();
    this.calcularIndicadores();
  }

  volverPpal() {
    this.volverService.volver();
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

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  get results(): { name: string; value: number }[] {
    return [
      { name: 'Ventas', value: this.totalVentas },
      // Agrega aquí otros valores que deseas mostrar en el gráfico
    ];
  }
}

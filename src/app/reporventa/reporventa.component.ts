  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { Router } from '@angular/router';
  import { VolverService } from '../volverservices.service';

  @Component({
    selector: 'app-reporventa',
    templateUrl: './reporventa.component.html',
    styleUrls: ['./reporventa.component.css']
  })
  export class ReporventaComponent implements OnInit {

    reporteForm!: FormGroup;
    formularioEnviado: boolean = false; // Nueva propiedad para verificar si el formulario ha sido enviado

    fechaActual: Date = new Date();

    constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, 
      private router:Router, private volverService:VolverService) {
      
        this.reporteForm = new FormGroup({
        ventaConIva: new FormControl ('', Validators.required),
        totalUnidades: new FormControl ('', Validators.required),
        totalFacturas: new FormControl ('', Validators.required),
        fecha: new FormControl('', [Validators.required, this.fechaValida.bind(this)])
      });

      this.reporteForm.patchValue({ fecha: this.fechaActual });
    }

    ngOnInit(): void {
      
    }

    volverPpal() {
      this.volverService.volver();
    }

    cancelar() {
      // Lógica para cancelar el formulario o realizar alguna acción adicional
    }

    aceptar() {
      this.formularioEnviado = true; // Establecer el formulario como enviado

      if (this.reporteForm.invalid) {
        this.snackBar.open('Campo pendiente', 'Cerrar', { duration: 3000 });
        return;
      }

      const ventaConIva = this.reporteForm.get('ventaConIva')?.value;
      const totalUnidades = this.reporteForm.get('totalUnidades')?.value;
      const totalFacturas = this.reporteForm.get('totalFacturas')?.value;
      const fecha = this.reporteForm.get('fecha')?.value;

      if (totalFacturas > totalUnidades) {
        this.snackBar.open('El total de facturas no puede ser mayor que el total de unidades. Verificar', 'Cerrar', { duration: 3000 });
        return;
      }

      if (confirm('¿Los datos son correctos?')) {
        console.log('Datos enviados:', ventaConIva, totalUnidades, totalFacturas);
        // subir a servidor
        this.snackBar.open('Los datos han sido enviados', 'Cerrar', { duration: 9000 });
        this.reporteForm.reset();
        this.formularioEnviado = false; // Reiniciar el estado del formulario enviado
        
      }
    }


    salir(){
      this.router.navigate(['/menuppal']);
    }

    consultar(){
      this.router.navigate(['/resultado']);
    }

    fechaValida(control: any) {
      const fechaSeleccionada = new Date(control.value);
      const fechaActual = new Date();

      if (fechaSeleccionada > fechaActual) {
        return { fechaInvalida: true };
      }

      return null;
    }
  }

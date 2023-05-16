import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-reporventa',
  templateUrl: './reporventa.component.html',
  styleUrls: ['./reporventa.component.css']
})
export class ReporventaComponent implements OnInit{

  ventaConIva: number | undefined;
  totalUnidades: number | undefined;
  totalFacturas: number | undefined;
  reporteForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.reporteForm = this.formBuilder.group({
      ventaConIva: ['', Validators.required],
      totalUnidades: ['', Validators.required],
      totalFacturas: ['', Validators.required]
    });
  }

  
  ngOnInit(): void {}

  //submitForm() {
    // Lógica para procesar los datos enviados en el formulario
  //console.log('Datos enviados:', this.ventaConIva, this.totalUnidades, this.totalFacturas);
  // }

  cancelar() {
    // Lógica para cancelar el formulario o realizar alguna acción adicional
  }

  aceptar() {
    console.log('Datos enviados:', this.ventaConIva, this.totalUnidades, this.totalFacturas);
    if (this.reporteForm.invalid) {
      this.snackBar.open('Por favor, complete todos los campos.', 'Cerrar', { duration: 3000 });
      return;
    }
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reporventa',
  templateUrl: './reporventa.component.html',
  styleUrls: ['./reporventa.component.css']
})
export class ReporventaComponent implements OnInit {

  reporteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.reporteForm = this.formBuilder.group({
      ventaConIva: ['', Validators.required],
      totalUnidades: ['', Validators.required],
      totalFacturas: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  cancelar() {
    // Lógica para cancelar el formulario o realizar alguna acción adicional
  }

  aceptar() {
    if (this.reporteForm.invalid) {
      this.snackBar.open('Por favor, complete todos los campos.', 'Cerrar', { duration: 3000 });
      return;
    }

    const ventaConIva = this.reporteForm.get('ventaConIva')?.value;
    const totalUnidades = this.reporteForm.get('totalUnidades')?.value;
    const totalFacturas = this.reporteForm.get('totalFacturas')?.value;

    if (confirm('¿Los datos son correctos?')) {
      console.log('Datos enviados:', ventaConIva, totalUnidades, totalFacturas);
      // subir a servidor
      this.snackBar.open('Los datos han sido enviados', 'Cerrar', { duration: 4000 });
      this.reporteForm.reset();

  }
  
}
}

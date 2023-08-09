import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class VolverService {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/menuppal']);
  }
}
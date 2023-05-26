import { Injectable} from '@angular/core';
import { ObjetoModelo } from './baseventa.model';

@Injectable({
    providedIn: 'root'
})

export class BaseventaService{
    constructor(){}

    getContacts(){
        return [
            new ObjetoModelo('001', 'T1', new Date(2022, 1, 1), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('002', 'T1',  new Date(2022, 1, 15), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('003', 'T2', new Date(2022, 2, 30), 1500, 75, 15, 'BOGOTA'),
            new ObjetoModelo('004', 'T3', new Date(2022, 3, 10), 1800, 90, 18, 'BOGOTA'),
            //new ObjetoModelo('005', 'T4', new Date(2022, 4, 22), 2500, 120, 25, 'MEDELLIN'),
            //new ObjetoModelo('006', 'T5', new Date(2022, 5, 5), 3000, 150, 30, 'MEDELLIN'),
            //new ObjetoModelo('007', 'T6', new Date(2022, 6, 17), 2200, 110, 22, 'MEDELLIN'),
            //new ObjetoModelo('008', 'T8', new Date(2022, 7, 28), 1700, 85, 17, 'MEDELLIN'),
            //new ObjetoModelo('009', 'T9', new Date(2022, 8, 9), 1900, 95, 19, 'MEDELLIN'),
            new ObjetoModelo('010', 'T10', new Date(2022, 9, 21), 2800, 140, 28, 'MEDELLIN'),
            new ObjetoModelo('010', 'T10', new Date(2022, 9, 21), 1, 1, 1, 'MEDELLIN')]
    }
}

import { Injectable} from '@angular/core';
import { ObjetoModelo } from '../models/baseventa.model';

@Injectable({
    providedIn: 'root'
})

export class BaseventaService{
    constructor(){}

    getContacts(){
        return [
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI', 0, 0, 0, "/Users/edinsoncolonia/Applications/neptuno/src/assets"),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T2', new Date(1, 5, 2023), 1500, 75, 15, 'BOGOTA'),
            new ObjetoModelo('1', 'T3', new Date(1, 4, 2023), 1800, 90, 18, 'BOGOTA'),
            new ObjetoModelo('10', 'T10', new Date(1, 1, 2023), 2800, 140, 28, 'MEDELLIN'),
            new ObjetoModelo('10', 'T10', new Date(1, 1, 2023), 1, 1, 1, 'MEDELLIN'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'T1', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'T1',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            ]
    }
}

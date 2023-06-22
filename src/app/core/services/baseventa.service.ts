import { Injectable} from '@angular/core';
import { ObjetoModelo } from '../models/baseventa.model';

@Injectable({
    providedIn: 'root'
})

export class BaseventaService{
    constructor(){}

    getContacts(){
        return [
            new ObjetoModelo('1', 'Tienda San Lucas', new Date(2023, 3, 2), 1000000, 50, 10, 'CALI', 0, 0, 0, "/Users/edinsoncolonia/Applications/neptuno/src/assets/icons/bolsa-de-la-compra.png"),
            new ObjetoModelo('1', 'Calle 5',  new Date(2023, 3, 2), 2000, 18000000, 20, 'CALI'),
            new ObjetoModelo('1', 'San Nicolas', new Date(1, 5, 2023), 1500, 75, 15, 'BOGOTA'),
            new ObjetoModelo('1', 'El Bosque L-231', new Date(1, 4, 2023), 1800, 90, 18, 'BOGOTA'),
            new ObjetoModelo('10', 'Quicentro', new Date(1, 1, 2023), 2800, 140, 28, 'MEDELLIN'),
            new ObjetoModelo('10', 'Calle 9', new Date(1, 1, 2023), 1, 1, 1, 'MEDELLIN'),
            new ObjetoModelo('1', 'Portal', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'Unicentro',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'Unico', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'Chipichape',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'Jardin', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'Recreo',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'Granada', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'Centenario',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
            new ObjetoModelo('1', 'Cosmo', new Date(2023, 3, 2), 1000, 50, 10, 'CALI'),
            new ObjetoModelo('1', 'Comnocentro',  new Date(2023, 3, 2), 2000, 100, 20, 'CALI'),
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

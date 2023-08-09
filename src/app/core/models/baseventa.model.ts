export class ObjetoModelo {
  constructor(
      public codigo: string, 
      public nombre: string,
      public fecha: Date, 
      public ventas: number, 
      public unidades: number, 
      public facturas: number,
      public ciudad: string,
      public ptounidades?: number,
      public ptofacturas?: number,
      public ptoventas?: number, 
      public imagen?: string,
      ){
    }
  }
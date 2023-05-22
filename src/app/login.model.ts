export class LoginPpal{
    constructor(
        public usuario:string,
        public correo:string,
        public contrasena?:string,
        public tipousuario?:{type: UsuarioTipo, string:string}[],
    ){}
}
export enum UsuarioTipo{
        managger= 'managger',
        tienda= 'tienda'
}

export interface LoginTipoI{
    type:UsuarioTipo;
    string:string;
}



export class NuevoUsuario {

    nombre: string;
    nombreUsuario: string;
    email: string;
    password:string;
//     athorities:string[];

    constructor(nombre: string, nombreUsuario: string, email: string, password: string) {
         this.nombre = nombre;
         this.nombreUsuario = nombreUsuario;
         this.email = email;
         this.password = password;
     }
    }



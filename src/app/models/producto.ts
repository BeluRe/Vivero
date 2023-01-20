export class Producto{
         id?: number;
         nombre: string;
         precio: number;

         constructor({ nombre, precio }: { nombre: string; precio: number; }){
                  this.nombre=nombre;
                  this.precio=precio;
         }

}
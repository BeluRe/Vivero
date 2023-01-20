
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

nombre: string= "lo que sea";
precio: number = 100;



  constructor(private productoService: ProductoService,
    private snack:MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

 
  onCreate(): void{
    
  const producto = new Producto({nombre: this.nombre, precio: this.precio});
  this.productoService.save(producto).subscribe({
      next: (data) => {
        console.log(data)
        Swal.fire('Producto registrado', 'Producto registrado con exito','success');
        
      },
      error:(error) => {
        console.log(error)
        Swal.fire('Producto no registrado', 'Producto no registrado (Precio tiene q ser mayor a 0) o ya existe ','error');
        ;
      }}
    )
  }
}






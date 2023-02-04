import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  
  productos: Producto[] = [];
  roles!: string[];
  isAdmin = false;
  tokenService: any;


  constructor(
    private productoService: ProductoService,
    private snack:MatSnackBar, 
    private tokenservice: TokenService) { }

  ngOnInit(): void {

    this.cargarProductos();
   
    this.roles = this.tokenservice.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    
  }


  cargarProductos():void{
    this.productoService.list().subscribe({

   
     next:  data =>{
        this.productos = data;

      },
      error: 
      err => {
        console.log(err);
      } }
    );
  };

  eliminar(id: number){
    this.productoService.delete(id).subscribe({
      next: (data) => {
        console.log(data)
        Swal.fire('Producto eliminado','success');
        this.cargarProductos();
      },
      error: (error) => {
        console.log(error)
        Swal.fire('Producto no eliminado','error');
        ;
      }}
    )
  };
    
  isLogged = false;
  
  nombreUsuario: any  = '';





}




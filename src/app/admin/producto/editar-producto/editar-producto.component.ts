import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

   producto!: Producto;
  

  constructor(

    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snack:MatSnackBar,


  ) { }




  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    

    this.productoService.detail(id).subscribe(
      {
        next: data => {
        this.producto = data;
      },
      error: error => {

        Swal.fire('Fail', 'Error','error');
        this.router.navigate(['/dashboard']);

      }}
    );
      
      
  }

  onUpdate(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.update(id, this.producto).subscribe({
      next: (data) => {
        console.log(data)
        Swal.fire('Producto editado', 'Producto editado con exito','success');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log(error)
        Swal.fire('Producto no editado', 'Producto no editado con exito (Precio tiene q ser mayor a 0) o ya existe ','error');
        ;
      }}
    )

  }
  

  }

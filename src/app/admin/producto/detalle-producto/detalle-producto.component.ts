import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  private _producto!: Producto;
  public get producto(): Producto {
    return this._producto;
  }
  public set producto(value: Producto) {
    this._producto = value;
  }

  constructor( private productoService: ProductoService,
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
        this.volver();
                       }
                       
      } );
      
    
  }
 volver(): void {
  this.router.navigate(['/dashboard']);
 }
  
  }



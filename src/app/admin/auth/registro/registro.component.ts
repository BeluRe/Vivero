import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  errMsj!: string;
  isLogged = false;
  snack: any;

  

  constructor(   
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
 
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    
  }
  }
  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe({

     next: 
     data => {
        console.log(data);
        Swal.fire('Usuario registrado', 'Usuario registrado con exito', 'success');
      },
      error:
      err => {
        this.errMsj = err.error.mensaje;
        console.log(err)
        Swal.fire('Usuario no registrado', 'Usuario no registrado con exito','error');
        ;
      }
    });

  }
  
  }



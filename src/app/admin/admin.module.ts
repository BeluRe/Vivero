import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductoComponent } from './producto/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';




@NgModule({
  declarations: [
    ListaProductoComponent,
    DetalleProductoComponent,
    EditarProductoComponent,
    NuevoProductoComponent,
    DashboardComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
   
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    
    
 
  ],
  exports: [
    ListaProductoComponent,
    DetalleProductoComponent,
    EditarProductoComponent,
    NuevoProductoComponent,
    DashboardComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,


    
  ]
})
export class AdminModule { }

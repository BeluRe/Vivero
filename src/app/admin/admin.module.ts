import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductoComponent } from './producto/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';

import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';

import { RouterModule } from '@angular/router';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';
import { FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TiendaComponent } from './shop/tienda/tienda.component';
import { FooterComponent } from './shop/footer/footer.component';
import { ContactoComponent } from './shop/contacto/contacto.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListaProductoComponent,
    DetalleProductoComponent,
    EditarProductoComponent,
    NuevoProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    TiendaComponent,
    FooterComponent,
    ContactoComponent,
    
    
   
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    
    
    
   
   
    
    
 
  ],
  exports: [
    ListaProductoComponent,
    DetalleProductoComponent,
    EditarProductoComponent,
    NuevoProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent
    
  ]
})
export class AdminModule { }

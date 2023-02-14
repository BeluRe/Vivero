import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/auth/login/login.component';
import { RegistroComponent } from './admin/auth/registro/registro.component';
import { DetalleProductoComponent } from './admin/producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './admin/producto/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './admin/producto/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './admin/producto/nuevo-producto/nuevo-producto.component';
import { ProdGuardService as guard } from './admin/guards/prod-guard.service';

import { IndexComponent } from './admin/index/index.component';
import { TiendaComponent } from './admin/shop/tienda/tienda.component';
import { ContactoComponent } from './admin/shop/contacto/contacto.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'tienda', component:TiendaComponent},
  {path: 'contacto', component:ContactoComponent},
  
  {path: 'lista', component: ListaProductoComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'detalle/:id', component: DetalleProductoComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'editar/:id', component: EditarProductoComponent,canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'nuevo', component: NuevoProductoComponent,canActivate: [guard], data: { expectedRol: ['admin'] }  },
 
  {path: '**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

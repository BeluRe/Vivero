import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DetalleProductoComponent } from './admin/producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './admin/producto/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './admin/producto/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './admin/producto/nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'lista', component: ListaProductoComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path:'editar/:id', component: EditarProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent, },
 
  {path: '**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

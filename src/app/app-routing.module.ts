import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { ProductsComponent } from './page/products/products.component';
import { OrderComponent } from './page/order/order.component';
import { OrderEditComponent } from './page/order-edit/order-edit.component';
import { OrderAddComponent } from './page/order-add/order-add.component';
import { ProductsAdminComponent } from './page/products-admin/products-admin.component';
import { ProductsEditComponent } from './page/products-edit/products-edit.component';
import { ProductsAddComponent } from './page/products-add/products-add.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin/order', component: OrderAdminComponent },
  { path: 'admin/order/:id', component: OrderEditComponent },
  { path: 'admin/order/add', component: OrderAddComponent },
  { path: 'admin/products', component: ProductsAdminComponent },
  { path: 'admin/products/add', component: ProductsAddComponent },
  { path: 'admin/products/:id', component: ProductsEditComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

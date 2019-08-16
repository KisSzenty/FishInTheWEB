import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { ProductsComponent } from './page/products/products.component';
<<<<<<< HEAD
import { OrderEditComponent } from './page/order-edit/order-edit.component';
import { OrderAddComponent } from './page/order-add/order-add.component';
=======
import { OrderComponent } from './page/index/order/order.component';
>>>>>>> da5b881e5af7c6d768a81612f827d3c9bdcf7584

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OrderAdminComponent,
    NavbarComponent,
    ProductsComponent,
<<<<<<< HEAD
    OrderEditComponent,
    OrderAddComponent
=======
    OrderComponent
>>>>>>> da5b881e5af7c6d768a81612f827d3c9bdcf7584
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

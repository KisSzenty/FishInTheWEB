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
import { OrderComponent } from './page/index/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OrderAdminComponent,
    NavbarComponent,
    ProductsComponent,
    OrderComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { ProductsComponent } from './page/products/products.component';
import { OrderComponent } from './page/order/order.component';
import { OrderEditComponent } from './page/order-edit/order-edit.component';
import { OrderAddComponent } from './page/order-add/order-add.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FishesComponent } from './products/categories/fishes/fishes.component';
import { ProductsAdminComponent } from './page/products-admin/products-admin.component';
import { ProductsAddComponent } from './page/products-add/products-add.component';
import { ProductsEditComponent } from './page/products-edit/products-edit.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OrderAdminComponent,
    NavbarComponent,
    ProductsComponent,
    OrderEditComponent,
    OrderAddComponent,
    OrderComponent,
    FilterPipe,
    FishesComponent,
    ProductsAdminComponent,
    ProductsAddComponent,
    ProductsEditComponent
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
export class AppModule {
  constructor() {
    library.add(faKey);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
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
import { PlantsComponent } from './products/categories/plants/plants.component';
import { CoralsComponent } from './products/categories/corals/corals.component';
import { ToolsComponent } from './products/categories/tools/tools.component';
import { AquariumsComponent } from './products/categories/aquariums/aquariums.component';
import { ProductInfoComponent } from './page/product-info/product-info.component';


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
    ProductsEditComponent,
    PlantsComponent,
    CoralsComponent,
    ToolsComponent,
    AquariumsComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faKey);
  }
}

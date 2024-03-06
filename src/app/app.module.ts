import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SearchComponent } from './header/search/search.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ListCarouselComponent } from './home/list-carousel/list-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    NavbarComponent,
    SearchComponent,
    CarouselComponent,
    ListCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { ActegoriesComponent } from './actegories/actegories.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ActegoriesdetailsComponent } from './subcategories/actegoriesdetails.component';
import { BrandsspecComponent } from './brandsspec/brandsspec.component';
// import { HeaderIntercept } from './y.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    ActegoriesComponent,
    BrandsComponent,
    ProductsComponent,
    WishlistComponent,
    MycartComponent,
    ProfileComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    ProductdetailsComponent,
    CheckoutComponent,
    ActegoriesdetailsComponent,
    BrandsspecComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,

  ],
  // providers: [{
  //    provide:HTTP_INTERCEPTORS,
  //    useClass:HeaderIntercept,
  //    multi:false,
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }

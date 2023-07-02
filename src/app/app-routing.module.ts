import { NgModule } from '@angular/core';
import { RouterModule, RouterPreloader, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ActegoriesComponent } from './actegories/actegories.component';
import { AllComponent } from './all/all.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { MycartComponent } from './mycart/mycart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActegoriesdetailsComponent } from './subcategories/actegoriesdetails.component';
const routes: Routes = [
  {path:'', redirectTo:"login",pathMatch:'full'},
  { path: 'all', component: AllComponent,canActivate:[AuthGuard] },
  { path: 'categories', component: ActegoriesComponent,canActivate:[AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'brands', component: BrandsComponent, canActivate:[AuthGuard]  },
  { path: 'checkout', component: CheckoutComponent, canActivate:[AuthGuard]  },
  { path: 'products', component: ProductsComponent,canActivate:[AuthGuard] },
  { path: 'wishlist', component: WishlistComponent,canActivate:[AuthGuard] },
  { path: 'cart', component: MycartComponent,canActivate:[AuthGuard] },
  { path: 'productdetails/:id', component:ProductdetailsComponent,canActivate:[AuthGuard] },
  { path: 'actegoriesdetails/:id', component:ActegoriesdetailsComponent,canActivate:[AuthGuard] },
  { path: 'actegories/:id', component:ActegoriesComponent,canActivate:[AuthGuard] },
  { path: 'products/:id', component:ProductsComponent,canActivate:[AuthGuard] },
  { path: 'brands/:id', component:BrandsComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

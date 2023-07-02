import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, NavigationExtras, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  cartItemNumber: number = 0;
  islogin: boolean = false;
  Id: string = "";
  userid: any
  
  constructor(private _CartService: CartService, private _authservice: AuthService, private _router: Router, private _activeroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._authservice.userData.subscribe(() => {
      if (this._authservice.userData.getValue() == null) {
        this.islogin = false
      } else {
        this.islogin = true;
      }

    })
     this._CartService.numOfCartItems.subscribe(()=>{
      this.cartItemNumber = this._CartService.numOfCartItems.getValue()
     })
    
    this._CartService.getAllCart().subscribe((res) => {
      if (res.status == "success") {
        this._CartService.numOfCartItems.next(res.numOfCartItems);
        this.cartItemNumber = res.numOfCartItems;
      }
    }) 
   
    
  }
  



  logout() {
    localStorage.removeItem("userToken");
    this._authservice.userData.next(null);
    this._router.navigate(['login'])
  }

}

import { Component } from '@angular/core';
import { EcommdataService } from '../ecommdata.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  allWishList: any;
  constructor(private _EcommDataService: EcommdataService) { }

  ngOnInit(): void {
    this._EcommDataService.getwishlist().subscribe((res)=>{
      this.allWishList = res
    })
  }
  removelist(PiD:string){
this._EcommDataService.deletewishlist(PiD).subscribe({
  next:(res)=>{ if(res.status == "success"){
    this._EcommDataService.getwishlist().subscribe((res)=>{
      this.allWishList = res
    })
  }},
  error:(err)=>{console.log(err)}
})
  }
}
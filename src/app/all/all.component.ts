import { Component } from '@angular/core';
import { EcommdataService } from '../ecommdata.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {

  allCat: any;
  allbrands:any;
  allproducts:any;
  constructor(private _ecommdataService: EcommdataService) { }

  ngOnInit(): void {

    this._ecommdataService.getall("categories").subscribe((response) => {
      this.allCat = response.data.slice(0,4)
    })
    this._ecommdataService.getall("brands").subscribe((response) => {
      this.allbrands = response.data.slice(0,4)
    })
    this._ecommdataService.getall("products").subscribe((response) => {
      this.allproducts = response.data.slice(0,4)
    })
  }
}

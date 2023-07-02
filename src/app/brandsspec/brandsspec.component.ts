import { Component } from '@angular/core';
import { EcommdataService } from '../ecommdata.service';

@Component({
  selector: 'app-brandsspec',
  templateUrl: './brandsspec.component.html',
  styleUrls: ['./brandsspec.component.scss']
})
export class BrandsspecComponent {
brandall:any
  constructor(private _ecommdataservice:EcommdataService){

  }
  brandsup(id: string) {
    this._ecommdataservice.spacbrands(id).subscribe({
      next: (res) => {
        this.brandall = res.data
      }
    })
  }
}

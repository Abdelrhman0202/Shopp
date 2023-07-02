import { Component } from '@angular/core';
import { EcommdataService } from '../ecommdata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  allbran: any
  constructor(private _ecommdataservce: EcommdataService,) { }

  ngOnInit(): void {
    this._ecommdataservce.brands().subscribe((response) =>{
        
        this.allbran = response.data;      
    })
  }
}

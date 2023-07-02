import { Component } from '@angular/core';
import { EcommdataService } from '../ecommdata.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
Pid : any="";
Pdata:any;

constructor(private _EcommdataService:EcommdataService,private _ActivatedRoute:ActivatedRoute,private _router:Router){}
ngOnInit(): void{
 this.Pid=this._ActivatedRoute.snapshot.paramMap.get("id");
 this._EcommdataService.getspecproduct(this.Pid).subscribe((res)=>{
 this.Pdata = res.data

 })
}
}

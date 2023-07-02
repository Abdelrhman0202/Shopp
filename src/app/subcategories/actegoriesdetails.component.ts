import { Component } from '@angular/core';
import { EcommdataService } from '../ecommdata.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-actegoriesdetails',
  templateUrl: './actegoriesdetails.component.html',
  styleUrls: ['./actegoriesdetails.component.scss']
})
export class ActegoriesdetailsComponent {
  Pid: any = "";
  PData: any
  suball: any
  constructor(private _EcommdataService: EcommdataService, private _ActivatedRoute: ActivatedRoute, private _router: Router) { }

  //   this.Pid=this._ActivatedRoute.snapshot.paramMap.get("id");
  // this._EcommdataService.getspecacategore(this.Pid).subscribe((res)=>{  this.PData = res.data })
  ngOnInit(): void {

  }

  gatesub(id: string) {
    this._EcommdataService.subcategories(id).subscribe({
      next: (res) => {
        this.suball = res.data
      }
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  erroRes: string = ""

  constructor(private _AuthService: AuthService, private _router:Router) { }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern("^[A-Z][a-zA-Z0-9]{4,8}$")]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern("^[A-Z][a-zA-Z0-9]{4,8}$")]),
    phone: new FormControl(null, [Validators.required, Validators.pattern("^(002)?(01)[0125][0-9]{8}$")]),
  },{validators:this.repassmatch})
repassmatch(registerForm:any){
  let passwordControl = registerForm.get('password');
  let rePasswordControl = registerForm.get('rePassword');
  if(passwordControl.value===rePasswordControl.value){
    return null;
  }else{
     rePasswordControl.setErrors({passwordmatch:'password and rePassword not match'})
     return {passwordmatch:'password and rePassword not match'}
  }
}


  register(registerForm:FormGroup) {
    
    this._AuthService.sendregister(registerForm.value).subscribe({
      next: (res) => {
        if(res.message=="success"){
         localStorage.setItem("userToken",res.token);
         this._AuthService.decodeSahredData();
         this._router.navigate(['login'])
        }
      console.log(res.value)
        },
        error:(err)=> {
          this.erroRes = err.error.message;
        },
        })
      
      }
    }





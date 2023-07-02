import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
erorforget:boolean=false;
verifycode:boolean=false;
  errores: any
  forgtshow: boolean = true;
  verifyshow: boolean = false;
  newpassshow: boolean = false;
  newpassmes:string = "";
  constructor(private _Authservice: AuthService, private _Router: Router) {

  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern("^[A-Z][a-zA-Z0-9]{4,8}$")])
  })
  login(loginForm: FormGroup) {

    this._Authservice.sendlogin(loginForm.value).subscribe({
      next: (response) => {
        if (response.message == "success") {
          localStorage.setItem("userToken", response.token);
          this._Authservice.decodeSahredData();
          this._Router.navigate(['all'])
        }
      },


      error: (eror) => {
        this.errores = eror.error.message;
      }
    })

  }



  forgetpassform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })
  forgetpass(forgetpassform: FormGroup) { 
    this._Authservice.forgetpassword(forgetpassform.value).subscribe({

      next: (res) => {
        if (res.statusMsg == "success") {
          this.forgtshow = false;
          this.verifyshow = true;
          console.log("tmam")
          this.erorforget=false
        }
      },
      error: (err) => {
        this.erorforget=err.error.message;
      }
    })
  }



  verifycodeform: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required])
  })
  verify(verifycodeform: FormGroup) {
    this._Authservice.verifycode(verifycodeform.value).subscribe({

      next: (res) => {
        if (res.status == "Success") {
          console.log("tmam verify")
          this.verifyshow = false;
          this.newpassshow = true;
          this.verifycode=false;
        }
      },
      error: (err) => {
       this.verifycode=err.error.message;
      }
    })
  }



  newpassform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern("^[A-Z][a-z][0-9]{4,8}$")])
  })
  newpass(newpassform: FormGroup) {
    this._Authservice.resetpass(newpassform.value).subscribe({
      next: (res) => {
        
          localStorage.setItem("userToken",res.token);
          this._Authservice.decodeSahredData();
          console.log("tmam")
        this.newpassshow=false;
        this.newpassmes = "new password reset pass"
        setTimeout(()=>{
          this._Router.navigate(["all"])
        },500)
        document.querySelector(".modal-backdrop.fade.show")?.classList.remove("show");
        document.querySelector(".modal-backdrop.fade")?.classList.remove("modal-backdrop");
        document.querySelector("body")?.classList.add("overflow-auto")
      }
      
    })
  }

}

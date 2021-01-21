import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient, private dialog: MatDialog, private router: Router) { }

  loginURL = environment.hostURL + "/api/user/login"

  doLogin(data:any) {
    this._http.post(this.loginURL,data).subscribe((res:any)=>{
      localStorage.setItem('token',res.token)
      this.router.navigate(["/DealerHome"])
    },(err:any)=>{
      this.dialog.open(SuccessDialogComponent,{data:{response:{header:'Login Failed', message: err.error.message !== undefined? err.error.message: "Something went wrong!!!"}}})
    })
  }
}

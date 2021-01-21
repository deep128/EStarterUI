import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _http: HttpClient) { }

  _signupURL:string = environment.hostURL + "/api/user/register";

  register(userData:any) {
    return this._http.post<any>(this._signupURL,userData)
  }
}
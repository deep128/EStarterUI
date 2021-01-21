import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'
import { SignUpService } from './sign-up.service'
import { MatDialog } from '@angular/material/dialog'
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(private signUpService:SignUpService, public matDialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }

  userForm:FormGroup = new FormGroup({
    firstname: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z\d]+$/)]),
    lastname: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z\d]+$/)]),
    username: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Za-z\d]+$/)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    cPassword: new FormControl(null,)
  },{validators:[this.passwordValidator]})

  
  onSubmit() {
    console.log(this.userForm.value)
    this.signUpService.register(this.userForm.value).subscribe(res=>{
      this.router.navigate(['/login'])
      this.matDialog.open(SuccessDialogComponent,{data:{response:{header:'SignUp Success',message:res.message}}})
    },
    err=>{
      this.matDialog.open(SuccessDialogComponent,{data:{response:{header:'SignUp Failed',message:err.error.message}}})
    })
  }

  passwordValidator(userForm: AbstractControl) {
    if(userForm.get('password')?.value === userForm.get('cPassword')?.value) {
      return null
    }
    return {passwordmatch:false}
  }

  isFieldValid(name:string):boolean {
    if(this.userForm?.get(name)?.valid)
      return true
    return false
  }

  isFieldDirty(name:string):boolean {
    if(this.userForm?.get(name)?.dirty)
      return true
    return false
  }

}

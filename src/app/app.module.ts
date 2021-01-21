import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from './components/dialogs/success-dialog/success-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { DealerHomeComponent } from './components/dealer-home/dealer-home.component'

const material = [
  MatDialogModule
]
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    WelcomeComponent,
    SuccessDialogComponent,
    LoginComponent,
    DealerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    material,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:WelcomeComponent},
      {path:'SignUp', component: SignUpComponent},
      {path:'login', component: LoginComponent},
      {path:'DealerHome', component: DealerHomeComponent}
    ]),
    BrowserAnimationsModule
  ],
  exports:[BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

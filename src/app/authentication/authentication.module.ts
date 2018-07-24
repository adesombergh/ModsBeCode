import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthenticationComponent, LoginComponent, SignupComponent]
})
export class AuthenticationModule { }

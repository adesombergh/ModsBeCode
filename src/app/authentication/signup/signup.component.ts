import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '@app/core/auth/validate.service';

@Component({
  selector: 'anms-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;
  // country: String;
  // language: String;

  constructor(
    private validateService: ValidateService,
    // private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // // Required fields
    // if (!this.validateService.validateRegister(user)) {
    //   // this.flashMessage.show('Please fill all fields', {cssClass: 'alert-danger', timeout: 3000})
    //   return false;
    // }

    // // Validate Email
    // if (!this.validateService.validateEmail(user.email)){
    //   // this.flashMessage.show('Auth failed', {cssClass: 'alert-danger', timeout: 3000})
    //   return false;
    // }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
    if (data.success){
      // this.flashMessage.show('You are now registered', {cssClass: 'alert-success', timeout: 3000})
      this.router.navigate(['/authenticate/login']);
      console.log('registered')
    } else {
      // this.flashMessage.show('Please fill all fields', {cssClass: 'alert-danger', timeout: 3000})
      this.router.navigate(['/authenticate/signup']);
      console.log('fucked up')
    }
  })
  }
}

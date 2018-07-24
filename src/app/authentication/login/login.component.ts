import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'anms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    // private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    // console.log(this.username)
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user)
        // this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000})
        this.router.navigate(['/home']);

      } else {
        // this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000})
        this.router.navigate(['/authenticate/login']);
      }
    })
  }



}


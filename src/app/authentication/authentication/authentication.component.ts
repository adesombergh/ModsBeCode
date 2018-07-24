import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@app/core';

@Component({
  selector: 'anms-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [routerTransition]
})
export class AuthenticationComponent implements OnInit {
  authentication = [
    { link: 'login', label: 'Login' },
    { link: 'signup', label: 'Sign-Up' }
  ];
  constructor() { }

  ngOnInit() {
  }

}

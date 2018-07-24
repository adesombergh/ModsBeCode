import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions
} from '@angular/http';
import {
  map
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {

  domain = 'http://localhost:3000'; // Development Domain - Not Needed in Production
  authToken;
  user;
  options;

  constructor(
    private http: Http, public jwtHelper: JwtHelperService
  ) {}

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    });
  }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
  }

  // Register : Making a post request to register API
  registerUser(user){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/signup', user, {headers: headers}).pipe(
      map(res => res.json()));
  }
  // Function to register user accounts
  authenticateUser(user) {
    return this.http.post(this.domain + '/user/login', user).pipe(
      map(res => res.json()));
  }

  // Function to check if username is taken
  // checkUsername(username) {
  //   return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(res => res.json());
  // }

  // Function to check if e-mail is taken
  // checkEmail(email) {
  //   return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(res => res.json());
  // }

  // Function to login user
  // login(user) {
  //   return this.http.post(this.domain + '/user/login', user).pipe(
  //     map(res => res.json()));
  // }

  // Function to logout
  logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }

  // Function to store user's data in client local storage
  storeUserData(token, user) {
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }

  // Function to get user's profile data
  getProfile() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + '/user/profile', this.options).pipe(
      map(res => res.json())
    );
  }

  // Function to check if user is logged in
  loggedIn() {
    this.jwtHelper.isTokenExpired();
  }



}

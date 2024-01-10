import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string) {
    // In a real-world scenario, you would make an API call to authenticate the user
    // and get a secure token from the server.
    // For demonstration purposes, a random token is generated and stored in local storage.
    localStorage.setItem("token", Math.random() + "");
  }

  get isLoggedIn() {
    // Check if a token exists in the local storage.
    if (localStorage.getItem('token')) {
      return true;  // User is considered logged in.
    }
    return false;  // No token found, user is not logged in.
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string) {
    // Check if localStorage is defined before using it
    if (typeof localStorage !== 'undefined') {
      // Store the token in localStorage
      localStorage.setItem("token", Math.random() + "");
    } else {
      console.error('localStorage is not available.');
    }
  }

  get isLoggedIn() {
    // Check if localStorage is defined before using it
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}

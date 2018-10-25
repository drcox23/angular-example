import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  user = {
    loggedIn: false,
    username: ''
  }

  constructor() {
    // check if user is in localStorage

    let userString = window.localStorage.getItem('user');
    // look at localStorage as a key-value pair, this is how we easily save things to the browser
    // localStorage is only in string format and limits you to 5mb of data.
    try {
      if (userString) { this.user = JSON.parse(userString); }
      else { console.log('user was not found'); }
    }
    catch(err) {
      console.log(err);
    }
  }

  getSession() {
    return this.user;
  }

  setSession(username) {
    // save to memory - save to the local session state
    this.user.loggedIn = true;
    this.user.username = username;

    // save to local storage
    let userString = JSON.stringify(this.user);
    window.localStorage.setItem('user', userString);
  }

  clearSession() {
    this.user.loggedIn = false;
    this.user.username = '';
    window.localStorage.removeItem('user');
  }

  // helper function to grab the user loggedin status right off the bat
  isLoggedIn() {
    return this.user.loggedIn;
  }

}

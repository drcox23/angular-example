import { Injectable, Inject } from '@angular/core';
import { BackendService } from './backend.service';
import { SessionService } from './session.service';


// there is a reason you want an auth service for things additional to
// each file should take care of one thing at a time
// auth service will handle loggin in and logging out
// session should handle things for the user
// having the 3 files seperated out helps keep things organize especially for larger projects

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService
  ) {}

  register(data) {
    return this.backend.register(data);
  }

  login(data) {
    return this.backend.login(data)
    .then((response) => {
      return this.session.setSession(data.username);
    });
  }

  logout() {
    return this.backend.logout()
    .then((response) => {
      return this.session.clearSession();
    })
  }


}

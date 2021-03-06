import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Header';

  user: object;

  constructor(
    private router: Router,
    private auth: AuthService,
    private session: SessionService
  ) {
    this.user = this.session.getSession();
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  login() {
    return this.router.navigate(['/login']);
  }

  logout(){
    return this.auth.logout();
  }

}




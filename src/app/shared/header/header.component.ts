import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "Header"

  constructor() {
  
  }
}




import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../Constant/routeAnimation';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [
    routeAnimation
    // animation triggers go here
  ]
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  activatedRoute(outlet: RouterOutlet){
    if(outlet.isActivated) return outlet.activatedRoute;
  }

}

import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../../constant/routeAnimation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    routeAnimation
    // animation triggers go here
  ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  activatedRoute(outlet: RouterOutlet){
    if(outlet.isActivated) return outlet.activatedRoute;
  }
}

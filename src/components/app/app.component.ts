import { Component } from '@angular/core';
import { routeAnimation } from '../Constant/routeAnimation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimation
    // animation triggers go here
  ]
})
export class AppComponent {

  activatedRoute(outlet: RouterOutlet){
    if(outlet.isActivated) return outlet.activatedRoute;
  }
}

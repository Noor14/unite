import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { enterLeaveAnimation } from 'src/app/constant/animations';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
   animations: [
    enterLeaveAnimation
    // animation triggers go here
  ]
})
export class ConversationComponent implements OnInit {

  public activeRoute: string = undefined;
  public openConversation: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
      this.activeRoute = this.activatedRoute.snapshot.url[0].path;
   }

  ngOnInit() {
  }
  openChat(){
    if(!this.openConversation){
      this.openConversation = true;
    }
  }

}

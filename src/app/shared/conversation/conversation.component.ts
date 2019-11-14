import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
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
    this.openConversation = true;
  }

}

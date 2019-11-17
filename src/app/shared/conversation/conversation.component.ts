import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
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
export class ConversationComponent implements OnInit , AfterViewChecked {
  @ViewChild('scroll') private scrollContainer: any;
  public activeRoute: string = undefined;
  public openConversation: boolean = false;
  public connectionList: any[] = new Array(8);

  constructor(private activatedRoute: ActivatedRoute) {
      this.activeRoute = this.activatedRoute.snapshot.url[0].path;
   }
  ngOnInit() {
  }
  openChat() {
    if (!this.openConversation) {
      this.openConversation = true;
    }
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
      this.scrollToBottom();
  }

  scrollToBottom(): void {
      try {
          this.scrollContainer.directiveRef.elementRef.nativeElement.scrollTop =
          this.scrollContainer.directiveRef.elementRef.nativeElement.scrollHeight;
      } catch (err) { }
  }

}

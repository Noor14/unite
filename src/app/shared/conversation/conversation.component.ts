import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInOut } from 'src/app/constant/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
   animations: [
    slideInOut
  ]
})
export class ConversationComponent implements OnInit , AfterViewChecked {
  @ViewChild('scroll') private scrollContainer: any;
  public activeRoute: string = undefined;
  public openConversation: boolean = false;
  public personInfo: boolean = false;
  public connectionList: any[] = [
    {
      id: 123,
      profileName: "Noor Ali",
      lastMsg: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget.",
      lastMsgTimeStamp:"10:23 PM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      conversationId: 234567,
      onlineStatus: false,
      unreadMsg: 0,
    },
    {
      id: 1234,
      profileName: "Aman Ali",
      lastMsg: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget.",
      lastMsgTimeStamp:"9:23 PM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      conversationId: 234567,
      onlineStatus: true,
      unreadMsg: 0,
    },
    {
      id: 12346,
      profileName: "Aun Rizvi",
      lastMsg: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget.",
      lastMsgTimeStamp:"11:23 PM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      conversationId: 234567,
      onlineStatus: true,
      unreadMsg: 2,
    },
    {
      id: 1247,
      profileName: "Aamir",
      lastMsg: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget.",
      lastMsgTimeStamp:"8:23 PM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      conversationId: 234567,
      onlineStatus: false,
      unreadMsg: 5,
    },
    {
      id: 12376,
      profileName: "Farhad",
      lastMsg: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget.",
      lastMsgTimeStamp:"7:23 PM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      conversationId: 234567,
      onlineStatus: false,
      unreadMsg: 0,
    },
    {
      id: 12387,
      profileName: "Nabeel",
      lastMsg: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget.",
      lastMsgTimeStamp:"10:23 PM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      conversationId: 234567,
      onlineStatus: true,
      unreadMsg: 7,
    },
    {
      id: 12312,
      profileName: "Ashfaq",
      lastMsg: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget.",
      lastMsgTimeStamp:"6:23 PM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      conversationId: 234567,
      onlineStatus: false,
      unreadMsg: 1,
    },
    {
      id: 12343,
      profileName: "Shehroz",
      lastMsg: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget.",
      lastMsgTimeStamp:"4:23 PM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      conversationId: 234567,
      onlineStatus: true,
      unreadMsg: 0,
    },
    {
      id: 123756,
      profileName: "Shahrukh",
      lastMsg: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget.",
      lastMsgTimeStamp:"5:23 PM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      conversationId: 234567,
      onlineStatus: true,
      unreadMsg: 2,
    },
  ];

  constructor(private activatedRoute: ActivatedRoute, private modalService: NgbModal) {
      this.activeRoute = this.activatedRoute.snapshot.url[0].path;
   }
  ngOnInit() {
  }

  openDialog() {
    this.modalService.open(DeleteDialogComponent, {
      centered: true,
      size: 'lg',
      windowClass: 'small-modal'
    });
  }
  openContactInfo() {
    this.personInfo = true;
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

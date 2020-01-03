import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public contacts:any[]= new Array(4)
  public cotactsList: any[] = [
    {
      id: 123,
      profileName: "Noor Ali",
      profileSatus: "Co-Worker.",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 1234,
      profileName: "Aman Ali",
      profileSatus: "Co-Worker.",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12346,
      profileName: "Aun Rizvi",
      profileSatus: "Co-Worker.",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 1247,
      profileName: "Aamir",
      profileSatus: "Co-Worker.",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12376,
      profileName: "Farhad",
      profileSatus: "Co-Worker.",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12387,
      profileName: "Nabeel",
      profileSatus: "Co-Worker.",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12312,
      profileName: "Ashfaq",
      profileSatus: "Co-Worker.",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12343,
      profileName: "Shehroz",
      profileSatus: "Co-Worker.",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 123756,
      profileName: "Shahrukh",
      profileSatus: "Co-Worker.",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

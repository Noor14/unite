import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit {

  public contacts:any[]= new Array(4)
  public cotactsList: any[] = [
    {
      id: 123,
      profileName: "Noor Ali",
      profileSatus: "Today at 10:02AM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 1234,
      profileName: "Aman Ali",
      profileSatus: "Today at 10:02AM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12346,
      profileName: "Aun Rizvi",
      profileSatus: "Today at 10:02AM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 1247,
      profileName: "Aamir",
      profileSatus: "Today at 10:02AM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12376,
      profileName: "Farhad",
      profileSatus: "Today at 10:02AM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12387,
      profileName: "Nabeel",
      profileSatus: "Today at 10:02AM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12312,
      profileName: "Ashfaq",
      profileSatus: "Today at 10:02AM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 12343,
      profileName: "Shehroz",
      profileSatus: "Today at 10:02AM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
    {
      id: 123756,
      profileName: "Shahrukh",
      profileSatus: "Today at 10:02AM",
      profileImgUrl:"../../../assets/_images/capture.PNG",
      profileId: 234567
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

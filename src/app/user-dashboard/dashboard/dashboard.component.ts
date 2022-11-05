import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedinUser!:any;
  userDetail!:any;
  constructor() { }

  ngOnInit(): void {
    this.loggedinUser = localStorage.getItem("Detail");
    this.userDetail = JSON.parse(this.loggedinUser);
    return this.loggedinUser;
  }

}

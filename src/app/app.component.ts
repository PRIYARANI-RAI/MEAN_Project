import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  loggedin!: any;
  loggedinUser!: any;
  userDetail!: any;
  
  constructor(private route: Router) {
  }

  LoggedIn() {
    this.loggedin = localStorage.getItem("Users");
    this.loggedinUser = localStorage.getItem("Detail");
    this.userDetail = JSON.parse(this.loggedinUser);
    return this.loggedinUser;
  }
  onLogout() {
    localStorage.removeItem("Users");
    localStorage.removeItem("Detail")
    this.route.navigate(["/login"])
  }
}


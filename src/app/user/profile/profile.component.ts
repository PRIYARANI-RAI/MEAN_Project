import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

//--------------------Modal----------------
declare var window: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //--------------------Modal----------------
  formModal: any;
  loggedinUser: any;
  userId: any;
  user: any = {
    firstname: '',
    lastname: '',
    addline1: '', 
    addline2: '', 
    state: '', 
    city: '' ,
    email: '',
    mobile: '',
  };
  constructor(
    private service: UserServiceService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )
    this.loggedinUser = JSON.parse(localStorage.getItem('Detail') as any);
  }
  //-----------Open Modal-----------------------------
  openModal() {
    this.formModal.show();
    this.user = JSON.parse(localStorage.getItem('Detail') as any);
    this.userId = this.user._id;
  }
  //-----------Close Modal-----------------------------
  closeModal() {
    this.formModal.hide();
  }
  //-----------Update Profile-----------------------------
  updateUser(data: any) {
    this.service.updateProfile(this.userId, data).subscribe((res: any) => {
      if (res.status) {
        alertify.success("Updated Successfull")
        localStorage.setItem('user', JSON.stringify(res.result))
        this.ngOnInit();
        this.closeModal();
      }
    })
  }






}

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private service: UserServiceService) { }
  ngOnInit(): void {
    if (this.service.IsLoggedIn()) {
      this.route.navigate(['/dashboard']);
    }
  }
  userSubmitted!: boolean;
  respdata:any;
  reactiveform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
});
get email(): FormControl {
  return this.reactiveform.get("email") as FormControl;
}
get password(): FormControl {
  return this.reactiveform.get("password") as FormControl;
}
//---------Login--------------------------------
  ProdceedLogin(){
    this.userSubmitted = true;
    if(this.reactiveform.valid){
      this.service.ProceedLogin(this.reactiveform.value).subscribe(item =>{
        this.userSubmitted = false;
        this.respdata = item;
        if(this.respdata.status==true){
          localStorage.setItem("Users",this.respdata.Token);
          localStorage.setItem("Detail", JSON.stringify(this.respdata.result));
          alertify.success("Login Successfully");
          this.route.navigate(["/dashboard"])
        }else{
          alertify.error("Login Failed");
        }
      });
    }
  }
}

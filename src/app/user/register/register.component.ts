import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private route: Router, private service: UserServiceService) { }

  ngOnInit(): void {
    this.state = this.service.state();
    localStorage.clear();
    if (this.service.IsLoggedIn()) {
      this.route.navigate(['/dashboard']);
    }
  }
  state: any = [];
  city: any = [];
  userSubmitted!: boolean;
  respdata: any;
  reactiveform = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    addline1: new FormControl('', Validators.required),
    addline2: new FormControl(''),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get firstname(): FormControl {
    return this.reactiveform.get("firstname") as FormControl;
  }
  get lastname(): FormControl {
    return this.reactiveform.get("lastname") as FormControl;
  }
  get addline1(): FormControl {
    return this.reactiveform.get("addline1") as FormControl;
  }
  get mobile(): FormControl {
    return this.reactiveform.get("mobile") as FormControl;
  }
  get email(): FormControl {
    return this.reactiveform.get("email") as FormControl;
  }
  get password(): FormControl {
    return this.reactiveform.get("password") as FormControl;
  }
  onSelect(state: any) {
    this.city = this.service.city().filter(e => e.id == state.target.value);
  }
  SaveUser() {
    this.userSubmitted = true;
    if (this.reactiveform.valid) {
      this.service.Registration(this.reactiveform.value).subscribe(item => {
        this.userSubmitted = false;
        this.respdata = item;
        if (this.respdata.status == true) {
          localStorage.setItem("Users", this.respdata.Token);
          localStorage.setItem("Detail", JSON.stringify(this.respdata.result));
          alertify.success("Registered Successfully");
          this.route.navigate(["/dashboard"])
        } else {
          alertify.error('Failed Try Again')
        }
      });
    }

  }
}

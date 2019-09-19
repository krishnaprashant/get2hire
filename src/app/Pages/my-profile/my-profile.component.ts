import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.css"]
})
export class MyProfileComponent implements OnInit {
  data = {
    email: ""
  };
  response: any;

  profile = {
    pic: ""
  };
  constructor(private loginService: LoginService) {
    this.data.email = sessionStorage.getItem("applicant");
  }

  ngOnInit() {
    this.data.email = sessionStorage.getItem("applicant");
    this.loginService
      .FetchUserDetails(this.data)
      .pipe(first())
      .subscribe(data => {
        this.response = data;
        this.profile.pic = data["profile"];
      });
  }
}

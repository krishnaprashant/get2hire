import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.css"]
})
export class LoginModalComponent implements OnInit {
  LoginForm: FormGroup;
  isSubmitted: boolean = false;
  isNotSelected: boolean = true;
  response: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  loginData = {
    loginType: "",
    email: "",
    password: ""
  };

  get f() {
    return this.LoginForm.controls;
  }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.compose([Validators.required])]
    });
  }

  SelectEmployer() {
    console.log("employer selected");
    this.isNotSelected = false;
    this.loginData.loginType = "employer";
  }
  SelectApplicant() {
    console.log("applicant selected");
    this.isNotSelected = false;
    this.loginData.loginType = "applicant";
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.LoginForm.valid && !this.isNotSelected) {
      this.loginData.email = this.f.email.value;
      this.loginData.password = this.f.password.value;
      this.loginService
        .login(this.loginData)
        .pipe(first())
        .subscribe(data => {
          this.response = data["response"];
          console.log(this.response);

          if (this.response == "applicant login successfull") {
            sessionStorage.setItem("applicant", this.f.email.value);
            sessionStorage.setItem("profile_status", data["status"]);
            window.location.href = "/applicant-dashboard/";
          }
          if (this.response == "employer login successfull") {
            sessionStorage.setItem("employer", this.f.email.value);
            window.location.href = "/employer-dashboard/";
          }
        });
    }
  }
}
